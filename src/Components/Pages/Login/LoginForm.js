import React from 'react'
import './Login.css'

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

import {useSpring, animated} from 'react-spring' // For animation of components

function LoginForm(props) {

    const springProps = useSpring({opacity: 1, from: {opacity: 0}});

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
        <animated.form className="formFields" style={springProps}>
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
                        <FormHelperText id="forgot_password_helper_text"><span className="pinkText clickable" onClick={() => props.setFormType('forgot_password')}>Forgot Password?</span></FormHelperText> 
                    </FormControl>
                    <Button 
                        classes={{
                                    root: 'flex_item themeButton',
                                    label: 'whiteText'
                                }}
                    >Login</Button>
                    {/* <button type="submit" className="themeButton fullWidth">Login</button> */}
            </animated.form>
    )
}

export default LoginForm
