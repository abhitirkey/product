import React, {useState} from 'react'
import './Homepage__Subcomponents.css'

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
    const [input, setInput] = useState('')
    const ButtonClasses = useStyles();

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
                <Button><BsImage/>&nbsp;Image</Button>
                <Button><BsCameraVideo/>&nbsp;Audio/Video</Button>
                <Button><BsFileEarmarkPlus/>&nbsp;File</Button>
            </div>
            <div className="WPForm__postButtonContainer">
                <Button 
                    classes={{
                                root: 'themeButton',
                                label: 'whiteText'
                            }}
                >Post</Button>
            </div>
        </>
    )
}

export default WritePost__Form
