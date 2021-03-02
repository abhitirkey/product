import React, {useState} from 'react'

import { makeStyles } from '@material-ui/core/styles';
import {IconButton, Button} from '@material-ui/core'
import {BsPen, BsImage, BsCameraVideo, BsFileEarmarkPlus} from 'react-icons/bs'

import {animated, useTransition} from 'react-spring'

import SnackbarFileError from './SnackbarFileError'
import UploadProgressBar from './UploadProgressBar'

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));


function WritePostFormless({formVisible, setFormVisibility}) {

    const [file, setFile] = useState(null);
    const [errorSnackBar, setErrorSnackBar] = useState(false);

    const transitions = useTransition(!formVisible, null, {
      from: { opacity: 0, transform: 'scale(0.5) translateY(-50%)' },
      enter: { opacity: 1, transform: 'scale(1) translateY(0)' },
      leave: { opacity: 0, transform: 'scale(0.5) translateY(50%)' },
      })

    const ButtonClasses = useStyles();

    const fileChangeHandler = (e) => {
      
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
          setErrorSnackBar(true);
        }
    }

    return transitions.map(({ item, key, props }) =>
    item && 
      <animated.div key={key} style={props} className="WritePostFormless">
            <IconButton aria-label="write a post" onClick={() => setFormVisibility(true)}><BsPen/><span className="spaceLeft">Write a Post...</span><div className="flex_spacer"></div></IconButton>
            <div className={ButtonClasses.root+" writePost__attachmentsGroup"}>
                <Button component="label"><BsImage/>&nbsp;Image <input type="file" name="image" accept=".jpg, .jpeg, .png" onChange={fileChangeHandler} hidden /></Button>
                <Button component="label"><BsCameraVideo/>&nbsp;Audio/Video<input type="file" name="media" accept=".wav, .mp3, .mp4, .wmv, .avi" onChange={fileChangeHandler} hidden/></Button>
                <Button component="label"><BsFileEarmarkPlus/>&nbsp;File<input type="file" name="any" hidden onChange={fileChangeHandler} /></Button>
            </div>
            <SnackbarFileError display={errorSnackBar} setDisplay={setErrorSnackBar}/>
              {file && <UploadProgressBar file={file} setFile={setFile}/>}
      </animated.div>
    )
}

export default WritePostFormless
