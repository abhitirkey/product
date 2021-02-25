import React, {useState} from 'react'
import './Homepage__Panels.css'

import { makeStyles } from '@material-ui/core/styles';
import {Avatar, Button} from '@material-ui/core'
import {FaUserFriends} from 'react-icons/fa'
import {BsImage, BsCameraVideo, BsFileEarmarkPlus} from 'react-icons/bs'

import {useStateValue} from 'Context/StateProvider'

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

function WritePost__Form() {

    const [{user}, dispatch] = useStateValue();
    const [input, setInput] = useState('');
    const ButtonClasses = useStyles();

    const submitHandler = () => {
        
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
            <textarea className="WPForm__TextField" value={input} placeholder="Write a Post" onChange={(e) => setInput(e.target.value)}></textarea>
            <div className={ButtonClasses.root+" WPMP__attachmentsGroup"}>
                <Button component="label"><BsImage/>&nbsp;Image <input type="file" name="image" accept=".jpg, .jpeg, .png" hidden /></Button>
                <Button component="label"><BsCameraVideo/>&nbsp;Audio/Video <input type="file" name="media" accept=".wav, .mp3, .mp4, .wmv, .avi" hidden /></Button>
                <Button component="label"><BsFileEarmarkPlus/>&nbsp;File <input type="file" name="all" hidden /></Button>
            </div>
            <div className="WPForm__postButtonContainer">
                <Button 
                    classes={{
                                root: 'themeButton',
                                label: 'whiteText'
                            }}
                    onClick={submitHandler}
                >Post</Button>
            </div>
        </>
    )
}

export default WritePost__Form
