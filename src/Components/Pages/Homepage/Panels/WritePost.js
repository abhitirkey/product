import React, {useState} from 'react'

import {useSpring} from 'react-spring'

import DeviceIdentifier from 'react-device-identifier'

import './Homepage__Panels.css'

import WritePostFormless from './SubComponents/WritePostFormless'
import WritePost__MobilePanel from './WritePost__MobilePanel'
import WritePost__Desktop from './WritePost__Desktop'


function WritePost() {

    const [formVisible, setFormVisibility] = useState(false); // Defining state variables to regulate visibility of the write post panel
    
    const contentProps = useSpring({
        opacity: formVisible ? 1: 0.5,
        transform: formVisible ? 'translateX(0)': 'translateX(-100%)'
    });

    return (
      <>
        <div className="writePost">
            {!formVisible && <WritePostFormless formVisible={formVisible} setFormVisibility={setFormVisibility}/> }  
            <DeviceIdentifier isTablet={true} isDesktop={true}>
              <WritePost__Desktop visibility={formVisible} setVisibility={setFormVisibility}/>
            </DeviceIdentifier>
        </div>
        <DeviceIdentifier isMobile={true}>
          <WritePost__MobilePanel style={contentProps} setVisibility={setFormVisibility}/>
        </DeviceIdentifier>
      </>
    )
}

export default WritePost
