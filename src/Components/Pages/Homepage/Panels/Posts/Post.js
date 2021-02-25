import React from 'react'
import TimeAgo from 'react-timeago'

import {IconButton} from '@material-ui/core'

import {AiOutlineUserAdd} from 'react-icons/ai'
import {FaEllipsisV, FaRegThumbsUp, FaRegCommentAlt} from 'react-icons/fa'
import {BsDot} from 'react-icons/bs'

function Post({ postData }) {
    const author = postData.author;
    const postText = postData.body.text;
    const media = postData.body.media;

    let media_JSX = null;
    // eslint-disable-next-line default-case
    switch(media.type){
        case 'image':
            media_JSX  = <img className="post__image" src={media.url} alt="PostMedia"/>;
    }
    return (
        <div className="PostsSection__post">
                <div className="post__topSection">
                    <img src={"./Media/"+author.profile_img} alt="Profile Pic"/>
                    <div className="post__personalDetails">
                        <p className="fullname">{author.name}</p>
                        <p className="role_and_department">{author.role+" "}|{" "+author.department}</p>
                        <p className="time_ago"><TimeAgo date={new Date(postData.datetime.toDate())}/></p>
                    </div>
                    <div className="flex_spacer"/>
                    <IconButton><AiOutlineUserAdd/></IconButton>
                    <IconButton><FaEllipsisV/></IconButton>
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
        </div>
    )
}

export default Post
