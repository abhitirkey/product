import React, {useState} from 'react'

import {animated, useTransition} from 'react-spring'

import { makeStyles } from '@material-ui/core/styles';
import {Avatar, Button, IconButton, CircularProgress} from '@material-ui/core'
import {IoClose} from 'react-icons/io5'
import {FaUserFriends} from 'react-icons/fa'
import {BsImage, BsCameraVideo, BsFileEarmarkPlus} from 'react-icons/bs'

import {useStateValue} from 'Context/StateProvider'

import db, { projectStorage, timestamp } from 'Configs/Firebase.js'

import UploadProgressBar from './UploadProgressBar'

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

function WritePost__Form({setFormVisibility}) {

    const [{user}, dispatch] = useStateValue();
    const [text, setText] = useState('');
    const [file, setFile] = useState(null);
    const [imagePreviewURL, setImagePreviewURL] = useState(null);
    const [submitting, setSubmit] = useState(false); // These mark when the form is being submitted
    
    const ButtonClasses = useStyles();

    const ImagePreviewTransition = useTransition(imagePreviewURL, null, {
        from: { opacity: 0, transform: 'scale(0.5) translateY(-50%)' },
        enter: { opacity: 1, transform: 'scale(1) translateY(0)' },
        leave: { opacity: 0, transform: 'scale(0.5) translateY(50%)' },
    })

    const fileChangeHandler = e => {

        let file = e.target.files[0];
        let field_type = e.target.name;
  
        let file_types = [];
  
        // eslint-disable-next-line default-case
        switch(field_type){
          case 'image':
            file_types.push('image/png', 'image/jpg', 'image/jpeg', 'image/gif');
            break;
          case 'media':
            file_types.push('audio/wav', 'audio/mp3', 'video/mp4', 'video/wmv', 'video/avi');
            break;
        }
  
        if((file && file_types.includes(file.type)) || (file && field_type === 'any')){
          setFile(file);
        }
        else {
          setFile(null);
          alert("Attempted to upload invalid file type! Please try again!");
        }

        let reader = new FileReader();

        reader.onloadend = () => {
            setImagePreviewURL(reader.result)
        };

        reader.readAsDataURL(e.target.files[0]);
    }

    const removeFile = () => {
        if(imagePreviewURL)
            setImagePreviewURL(null);
        
        setFile(null);    
    }

    const submitHandler = async () => {

        if(file){
            await setSubmit(true);
            return;
        }
        else if(text === ''){
            alert("Cannot submit a blank post, sorry...");
            return;
        }
        
        setSubmit(true);

        const collectionRef = db.collection('posts');

        const createdAt = timestamp();

        const postData = {
            author: {
                id: 3,
                name: user.displayName,
                profile_img: "user.jpg",
                role: "Tutee",
                department: "Software Development"
            },
            body: {
                media: null,
                text: text
            },
            comments: 0,
            likes: 0,
            datetime: createdAt
        }

        collectionRef.add(postData).then(() => { 
            window.scrollTo(0,0);
            clearForm();
        });
    }

    const clearForm = () => {
        setText('');
        setSubmit(false);
        setFormVisibility(false);
    }

    return (
        <>
            <div className="WPForm__ProfileRow">
                <Avatar src={user.photoURL} alt="ProfilePic"/>
                <div className="name_and_visibility">
                    <span className="boldText">{user.displayName}</span>
                    <Button variant="contained"><FaUserFriends/>&nbsp;Connections</Button>
                </div>
            </div>
            <textarea className="WPForm__TextField" value={text} placeholder="Write a Post" onChange={(e) => setText(e.target.value)}></textarea>
            {
            //    ImagePreviewTransition.map(({ item, key, props }) =>
            //     item && <animated.div style={{props}} className="WPForm__FilePreviewContainer"><img src={imagePreviewURL} alt="Image Preview"/></animated.div>
            //    )
            }
            {imagePreviewURL && 
                <div className="WPForm__FilePreviewContainer">
                    <IconButton 
                        classes={{
                            root: 'FilePreview__closeButton'
                        }}
                    color='inherit'
                    onClick={removeFile}
                    ><IoClose/></IconButton>
                    <img src={imagePreviewURL} alt="Preview"/>
                </div>} 
            <div className={ButtonClasses.root+" WPMP__attachmentsGroup"}>
                <Button component="label"><BsImage/>&nbsp;Image <input type="file" name="image" accept=".jpg, .jpeg, .png" hidden onChange={fileChangeHandler}/></Button>
                <Button component="label"><BsCameraVideo/>&nbsp;Audio/Video <input type="file" name="media" accept=".wav, .mp3, .mp4, .wmv, .avi" hidden /></Button>
                <Button component="label"><BsFileEarmarkPlus/>&nbsp;File <input type="file" name="all" hidden /></Button>
            </div>
            <div className="WPForm__postButtonContainer">
                <Button
                    style={{padding: '0.5rem 0'}} 
                    classes={{
                                root: 'themeButton',
                                label: 'whiteText'
                            }}
                    onClick={submitHandler}
                >
                    {submitting ? <><span>Submitting</span>&nbsp;&nbsp;&nbsp;<CircularProgress color="white" size="1.5rem"/></> : "Post"}
                </Button>
            </div>
            {file && submitting && <UploadProgressBar file={file} setFile={setFile} text={text} clearForm={clearForm}/>}
        </>
    )
}

export default WritePost__Form
