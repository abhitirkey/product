import React from 'react'
import './Login.css'

import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'

import {FaLock} from 'react-icons/fa'

import {useSpring, animated} from 'react-spring'

function ForgotPassword(props) {

    const springProps = useSpring({opacity: 1, from: {opacity: 0}});

    const handleChange = prop => event => {
        props.setFields({ ...props.formFields, [prop]: event.target.value}); // This will take any field and update it
    }

    return (
        <animated.div className="forgot_password_container" style={springProps}>
            <span className="boldText center flex_item"><FaLock/> Forgot Password</span>
            <span className="smallText flex_item">Please input your registered email address and we'll send a link to reset your password or contact admin.</span>
            <FormControl className="fullWidth flex_item">
                <InputLabel htmlFor="userEmail">Email</InputLabel> 
                <Input 
                    id="userEmail" 
                    value={props.formFields.userEmail} 
                    onChange={handleChange('userEmail')}
                    inputProps={{'aria-label': 'UserEmail'}}
                />
            </FormControl>
            <Button 
                classes={{
                            root: 'themeButton fullWidth flex_item',
                            label: 'whiteText'
                        }}
                onClick={() => {
                        props.setFormType('login')
                    }}
            >
                Submit
            </Button>
            <span className="smallText pinkText clickable align_self_start" onClick={() => props.setFormType('login')}>Back to Login</span>
        </animated.div>
    )
}

export default ForgotPassword
