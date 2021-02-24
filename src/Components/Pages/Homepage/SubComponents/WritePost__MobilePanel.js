import React from 'react'
import './Homepage__Subcomponents.css'

import WritePost__Form from './WritePost__Form'

import {animated} from 'react-spring'

import {Button, IconButton, Avatar} from '@material-ui/core'
import {FaArrowLeft, FaUserFriends} from 'react-icons/fa'
import {BsImage, BsCameraVideo, BsFileEarmarkPlus} from 'react-icons/bs'

import ProfilePic from './images/profile_pic.jpg' 

function WritePost__MobilePanel({style, setVisibility}) {

    return (
        <animated.div className="WritePost__MobilePanel" style={style}>
            <div className="WPMP__TopRow lightText">
                <IconButton onClick={() => setVisibility(false)}><FaArrowLeft/></IconButton>
                <span className="largeText">Create a Post</span>
            </div>
            <WritePost__Form/>
        </animated.div>
    )
}

export default WritePost__MobilePanel
