import React, {useState} from 'react'

import {useSpring, useTransition, animated} from 'react-spring'

import DeviceIdentifier from 'react-device-identifier'

import './Homepage__Panels.css'

import WritePostFormless from './SubComponents/WritePostFormless'
import WritePost__MobilePanel from './SubComponents/WritePost__MobilePanel'
import WritePost__Desktop from './SubComponents/WritePost__Desktop'


function WritePost() {

    const [formVisible, setFormVisibility] = useState(false); // Defining state variables to regulate visibility of the write post panel
    
    const contentProps = useSpring({
        opacity: formVisible ? 1: 0.5,
        transform: formVisible ? 'translateX(0)': 'translateX(-100%)'
    });

    const transition = useTransition(formVisible, null, {
      from: {maxHeight: '10rem'},
      enter: {maxHeight: '30rem'},
      leave: {maxHeight: '10rem'}
    })

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
