import React, {useState, useEffect} from 'react'

import {useSpring} from 'react-spring'

import DeviceIdentifier from 'react-device-identifier'

import './Homepage__Subcomponents.css'

import { makeStyles } from '@material-ui/core/styles';
import {IconButton, Button} from '@material-ui/core'
import {BsPen, BsImage, BsCameraVideo, BsFileEarmarkPlus} from 'react-icons/bs'

import WritePost__MobilePanel from './WritePost__MobilePanel'
import WritePost__DesktopPanel from './WritePost__DesktopPanel'

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

function WritePost() {

    const [formVisible, setFormVisibility] = useState(false); // Defining state variables to regulate visibility of the write post panel

    const contentProps = useSpring({
        opacity: formVisible ? 1: 0.5,
        transform: formVisible ? 'translateX(0)': 'translateX(-100%)'
    });

    const ButtonClasses = useStyles();

    return (
      <>
        <div className="writePost">
            <IconButton aria-label="write a post" onClick={() => setFormVisibility(true)}><BsPen/><span className="spaceLeft">Write a Post...</span><div className="flex_spacer"></div></IconButton>
            <div className={ButtonClasses.root+" writePost__attachmentsGroup"}>
                <Button><BsImage/>&nbsp;Image</Button>
                <Button><BsCameraVideo/>&nbsp;Audio/Video</Button>
                <Button><BsFileEarmarkPlus/>&nbsp;File</Button>
            </div>   
        </div>
        <DeviceIdentifier isMobile={true}>
          <WritePost__MobilePanel style={contentProps} setVisibility={setFormVisibility}/>
        </DeviceIdentifier>
        <DeviceIdentifier isTablet={true} isDesktop={true}>
          <WritePost__DesktopPanel visibility={formVisible} setVisibility={setFormVisibility}/>
        </DeviceIdentifier>
      </>
    )
}

export default WritePost
