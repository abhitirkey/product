import React, {useState} from 'react'
import { unmountComponentAtNode } from "react-dom";
import TimeAgo from 'react-timeago'

import {IconButton, Avatar, Menu, MenuItem} from '@material-ui/core'

import {useTransition, animated} from 'react-spring'

import {AiOutlineUserAdd} from 'react-icons/ai'
import {FaEllipsisV, FaRegThumbsUp, FaRegCommentAlt, FaTrashAlt} from 'react-icons/fa'
import {BsDot} from 'react-icons/bs'

import db from 'Configs/Firebase'

const OptionsMenuStyle = {
    top: '3rem',
    left: '-3%'
};



function Post({ postData }) {
    const author = postData.author;
    const postText = postData.body.text;
    const media = postData.body.media;

    const [anchorEl, setAnchorEl] = useState(null);

    const PostTransition = useTransition(true, null, {
        from: { opacity: 0, transform: 'scale(0.5) translateY(-50%)' },
        enter: { opacity: 1, transform: 'scale(1) translateY(0)' },
        leave: { opacity: 0, transform: 'scale(0.5) translateY(50%)' },
    })

    let media_JSX = null;
    // eslint-disable-next-line default-case
    if(media){
        switch(media.type){
            case 'image':
                media_JSX  = <img className="post__image" src={media.url} alt="PostMedia"/>;
        }
    }

    const deletePost = (postID) => {

        if (window.confirm("Are you sure you want to delete this post?")) {
            db.collection("posts").doc(postID).delete().then(() => {
                console.log("Document successfully deleted!");
            }).catch((error) => {
                console.error("Error removing document: ", error);
            });
            setAnchorEl(null);
        }
    }

    const handleOptionsClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleOptionsClose = () => {
        setAnchorEl(null);
    };

    return PostTransition.map(({item, key, props}) => 
        item && 
        <animated.div className="PostsSection__post" id={'post__'+postData.id} style={props}>
            <div className="post__topSection">
                <Avatar src={"./Media/"+author.profile_img} alt={author.name}/>
                <div className="post__personalDetails">
                    <p className="fullname">{author.name}</p>
                    <p className="role_and_department">{author.role+" "}|{" "+author.department}</p>
                    {postData.datetime && <p className="time_ago"><TimeAgo date={new Date(postData.datetime.toDate())}/></p>}
                </div>
                <div className="flex_spacer"/>
                <IconButton><AiOutlineUserAdd/></IconButton>
                <IconButton aria-controls={"post__dropdown-"+postData.id} aria-haspopup="true" className="post__optionsButton" onClick={handleOptionsClick}><FaEllipsisV/></IconButton>
                <Menu 
                    id={"post__dropdown-"+postData.id} 
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleOptionsClose}
                    style={OptionsMenuStyle}
                >
                    <MenuItem onClick={() => deletePost(postData.id)}><FaTrashAlt className="inlineIcon"/>Delete</MenuItem>
                </Menu>
            </div>
            {postText && <div className="post__body">{ postText }</div>}
            {media && media_JSX}
            <div className="post__stats">
                { postData.likes > 0  && <><FaRegThumbsUp/><span className="likes">{postData.likes+" likes"}</span></>}{postData.likes > 0 && postData.comments > 0 && <span><BsDot/></span>}
                { postData.comments > 0 && <span className="comments">{postData.comments+" comments"}</span>}
            </div>
            <div className="like__comment">
                <IconButton aria-label="Like this post"><FaRegThumbsUp/><span className="spaceLeft">Like</span></IconButton>
                <IconButton aria-label="Comment on this post"><FaRegCommentAlt/><span className="spaceLeft">Comment</span></IconButton>
            </div>
        </animated.div>
    )
}

export default Post
