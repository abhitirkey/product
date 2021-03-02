import React, {useState} from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Stepper, Step, StepLabel, StepContent, Button, Paper, Typography, FormControl, TextField, Input, InputLabel, InputAdornment, IconButton } from '@material-ui/core'

import {animated} from 'react-spring'

import {MdVisibility, MdVisibilityOff} from 'react-icons/md'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    actionsContainer: {
        marginBottom: theme.spacing(2),
    },
    resetContainer: {
        padding: theme.spacing(3),
    }
}));

const email_regX = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

function getSteps() {
    return ['Your personal details', 'Select a username', 'Choose a password']
}

function SignUpAssist(props) {

    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const [formField, setFormField] = useState({
        fullName: '',
        email: '',
        password: '',
        showPassword: false,
        confirmPassword: '',
        showConfirmPassword: false,
        username: '',
        errors: {
            fullName: null,
            email: null,
            username: null,
            password: null,
            confirmPassword: null
        }
    }) 

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }

    const handleReset = () => {
        setActiveStep(0);
    }

    const handleFieldChange = (field) => (event) => {
        setFormField({[field]: event.target.value})

        let isError = false;
                   
        if (formField.fullName.length < 2) {
            isError = true;
            setFormField({
                errors: { ...formField.errors, fullName: "Please enter a valid name" }
            });
        } 

        if (formField.username.length < 2) {
            isError = true;
            setFormField({
                errors: { ...formField.errors, username: "Please enter a valid username"}
            })
        }

        if(!email_regX.test(formField.email)){
            isError = true;
            setFormField({
                errors: { ...formField.errors, email: "Please enter a valid email address"}
            })
        }

        if(formField.password.length < 8){
            isError = true
        }
        
        // if(!isError){
        // //add else if for validating other fields (if any)
        // this.setState(prevState => ({
        //     activeStep: prevState.activeStep + 1,
        //     error: false,
        //     errorMessage: {}
        // }));
        // }
    }

    const handleClickShowPassword = (field) => {
        setFormField({[field]: !formField.showPassword});
    }

    const handleMouseDownPassword = event => {
        event.preventDefault();
    }

    function getStepContent(step) {
        switch(step) {
            case 0:
                return (
                    <div className="formFields"> 
                        <TextField 
                            id="fullName" 
                            label="Your Full Name"
                            value={formField.fullName}
                            onChange={handleFieldChange('fullName')}
                        />
                        <TextField 
                            id="email" 
                            label="Your Email"
                            value={formField.email}
                            onChange={handleFieldChange('email')}
                        />
                    </div>)
            case 1:
                return (
                    <div className="formFields">
                        <FormControl className="flex_item">
                                <InputLabel htmlFor="username">Username</InputLabel> 
                                <Input 
                                    id="username" 
                                    value={formField.username} 
                                    onChange={handleFieldChange('username')}
                                    inputProps={{'aria-label': 'fullName'}}
                                />
                        </FormControl>
                    </div>
                );
            case 2:
                return ( 
                    <div className="formFields"> 
                    <FormControl className="flex_item">
                        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                        <Input
                            id="standard-adornment-password"
                            type={formField.showPassword ? 'text':'password'}
                            value={formField.password}
                            onChange={handleFieldChange('password')}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton 
                                        aria-label="toggle password visibility"
                                        onClick={() => handleClickShowPassword('showConfirmPassword')}
                                        onMouseDown={handleMouseDownPassword} 
                                    >
                                        {formField.showPassword ? <MdVisibility/> : <MdVisibilityOff/>}
                                    </IconButton>
                                </InputAdornment>
                                }
                            />
                    </FormControl>
                    <FormControl className="flex_item">
                        <InputLabel htmlFor="standard-adornment-confirmPassword">Confirm Password</InputLabel>
                        <Input
                            id="standard-adornment-confirmPassword"
                            type={formField.showConfirmPassword ? 'text':'password'}
                            value={formField.confirmPassword}
                            onChange={handleFieldChange('confirmPassword')}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton 
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword} 
                                    >
                                        {formField.showConfirmPassword ? <MdVisibility/> : <MdVisibilityOff/>}
                                    </IconButton>
                                </InputAdornment>
                                }
                            />
                    </FormControl>
                    </div>)
            // case 2:
            //     return <input type="username" value={formField.username} name="User Name" placeholder="Username"/>
            default:
                return 'Unknown step';
        }
    }

    return (
        <animated.div style={{...props.style, marginTop: '2.5rem'}}>
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((item, index) => (
                    <Step key={item}>
                        <StepLabel>{item}</StepLabel>
                        <StepContent>
                            <div>
                                {getStepContent(index)}
                            </div>
                            <div className={classes.actionsContainer}>
                                <div>
                                    {
                                        activeStep !== 0 ? 
                                            <Button
                                            disabled={activeStep === 0}
                                            onClick={handleBack}
                                            className={classes.Button}
                                            >Back</Button> : null
                                    }
                                    <Button
                                        variant="contained"
                                        onClick={handleNext}
                                        className={classes.button}
                                    >
                                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                    </Button>
                                </div>
                            </div>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
            {activeStep === steps.length && (
                <Paper square elevation={0} className={classes.resetContainer}>
                <Typography>You're all set to <span className="pinkText clickable align_self_start" onClick={() => props.setFormType(0)}>log in</span> now!</Typography>
                </Paper>
            )}
            <span className="smallText pinkText clickable align_self_start" onClick={() => props.setFormType(0)}>Back to Login</span>
        </animated.div>
    )
}

export default SignUpAssist
