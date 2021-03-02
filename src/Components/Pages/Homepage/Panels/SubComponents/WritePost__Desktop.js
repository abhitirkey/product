import React from 'react'

import {animated, useTransition} from 'react-spring'

import WritePost__Form from './WritePost__Form'
import {IconButton} from '@material-ui/core'
import {IoClose} from 'react-icons/io5'

function WritePost__Desktop({visibility, setVisibility}) {

    const transitions = useTransition(visibility, null, {
        from: { opacity: 0, transform: 'scale(0.5) translateY(-50%)' },
        enter: { opacity: 1, transform: 'scale(1) translateY(0)' },
        leave: { opacity: 0, transform: 'scale(0.5) translateY(50%)' },
    })

    // const contentProps = useSpring({
    //     opacity: visibility ? 1: 0,
    //     transform: visibility ? 'translateY(0)': 'translateY(-100%)'
    // });

    return transitions.map(({ item, key, props }) =>
    item && <animated.div key={key} style={props} className="WritePost__Desktop">
                <IconButton 
                    classes={{
                        root: 'writePost__closeButton',
                        label: 'lightText'
                    }}
                    color='inherit'
                    onClick={() => setVisibility(false)}
                ><IoClose/></IconButton>
                <WritePost__Form setFormVisibility={setVisibility}/>
            </animated.div>
    )

    // let content = visibility ? 
    //     <animated.div className="WritePost__Desktop" style={contentProps}>
            
    //     </animated.div> : null;
    // return content;
}

export default WritePost__Desktop
