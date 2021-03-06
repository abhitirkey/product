import React from 'react'

import ToggleButton from '@material-ui/lab/ToggleButton'
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup'

import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'

import {MdVisibility, MdVisibilityOff} from 'react-icons/md'
import { FormHelperText } from '@material-ui/core'

import {animated} from 'react-spring' // For animation of components

import {auth, provider} from 'Configs/Firebase'


import {actionTypes} from 'Context/reducer'
import {useStateValue} from 'Context/StateProvider'

function LoginForm(props) {

    const [state, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then((result) => {
            console.log(result);
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            })
        })
        .catch((error) => alert(error.message));
    }

    const handleChange = prop => event => {
        props.setFields({ ...props.formFields, [prop]: event.target.value}); // This will take any field and update it
    }

    const handleRoleToggle = (event, currentRole) => {
        props.setFields({role : currentRole});
    }

    const handleClickShowPassword = () => {
        props.setFields({ ...props.formFields, showPassword: !props.formFields.showPassword});
    }

    const handleMouseDownPassword = event => {
        event.preventDefault();
    }

    return (
        <animated.div className="formFields" style={props.style}>
                    <span className="lightText margin_top_bottom">Log in as</span>
                    <ToggleButtonGroup
                        value={props.formFields.role}
                        exclusive
                        onChange={handleRoleToggle}
                        aria-label="User Role"
                    >
                        <ToggleButton value='tutee' aria-label="Tutee">
                            Tutee
                        </ToggleButton>
                        <ToggleButton value='tutor' aria-label="Tutor">
                            Tutor
                        </ToggleButton>
                        <ToggleButton value='admin' aria-label="Admin">
                            Admin
                        </ToggleButton>
                    </ToggleButtonGroup> 
                    <FormControl className="flex_item">
                        <InputLabel htmlFor="username">Username</InputLabel> 
                        <Input 
                            id="username" 
                            value={props.formFields.username} 
                            onChange={handleChange('username')}
                            inputProps={{'aria-label': 'Username'}}
                        />
                    </FormControl>
                    <FormControl className="flex_item">
                        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                        <Input
                            id="standard-adornment-password"
                            type={props.formFields.showPassword ? 'text':'password'}
                            value={props.formFields.password}
                            onChange={handleChange('password')}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton 
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword} 
                                    >
                                        {props.formFields.showPassword ? <MdVisibility/> : <MdVisibilityOff/>}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <FormHelperText id="forgot_password_helper_text"><span className="pinkText clickable" onClick={() => props.setFormType(1)}>Forgot Password?</span></FormHelperText>
                    <Button 
                        classes={{
                                    root: 'flex_item themeButton',
                                    label: 'whiteText'
                                }}
                        onClick={signIn}
                    >Login</Button>
                    <p>New? <span className="boldText clickable" onClick={() => props.setFormType(2)}>Sign Up</span> now!</p>
            </animated.div>
    )
}

export default LoginForm
