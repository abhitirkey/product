import React from 'react'

import {animated, useSpring} from 'react-spring'

import WritePost__Form from './WritePost__Form'
import {IconButton} from '@material-ui/core'
import {GrClose} from 'react-icons/gr'

function WritePost__Desktop({visibility, setVisibility}) {

    const contentProps = useSpring({
        opacity: visibility ? 1: 0,
        transform: visibility ? 'translateY(0)': 'translateY(-100%)'
    });

    let content = visibility ? 
        <animated.div className="WritePost__Desktop" style={contentProps}>
            <IconButton 
                classes={{
                    root: 'writePost__closeButton',
                    label: 'lightText'
                }}
                onClick={() => setVisibility(false)}
            ><GrClose/></IconButton>
            <WritePost__Form/>
        </animated.div> : null;
    return content;
}

export default WritePost__Desktop
