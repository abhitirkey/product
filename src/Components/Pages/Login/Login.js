import React, {useState} from 'react'

import './Login.css'

import {useTransition, animated} from 'react-spring'

import LoginBackgroundImage from './LoginWallpaper.png'
import tyuteeLoginLogo from './tyuteeLoginLogo.png'

import LoginForm from './LoginForm.js'
import ForgotPassword from './ForgotPassword.js'
import SignUpAssist from './SignUpAssist'

function Login() {

    const [formFieldValues, setFormFieldValues] = useState({
        role: 'tutee',
        userEmail: '',
        username: '',
        password: '',
        showPassword: false,
      });

    const [formType, setFormType] = useState(0);

    const Components = [
        ({style}) => <LoginForm style={{...style}} formFields={formFieldValues} setFields={setFormFieldValues} setFormType={setFormType}/>,
        ({style}) => <ForgotPassword style={{...style}} formFields={formFieldValues} setFields={setFormFieldValues} setFormType={setFormType}/>,
        ({style}) => <SignUpAssist style={{...style}} setFormType={setFormType}/>
    ];

    const transitions = useTransition(formType, p => p, {
        from: {opacity: 0, transform: 'translate3d(100%, 0, 0)'},
        enter: {opacity: 1, transform: 'translate3d(0%, 0, 0'},
        leave: {opacity: 0, transform: 'translate3d(-50%, 0, 0)'}
    })

    const logoTransition = useTransition(null, null, {
        from: {opacity: 0, transform: 'translate3d(-50%, 0, 0)'},
        enter:{opacity: 1, transform: 'translate3d(0%, 0, 0)'}
    })

    const imageTransition = useTransition(null, null, {
        from: {opacity: 0, transform: 'translateY(-100%)'},
        enter: {opacity: 1, transform: 'translateY(0)'}
    })

    return (
        <div className="login_Container">
            {
                imageTransition.map(({item, props, key}) => {
                    return (
                        <animated.div style={props} className="image_container">
                            <img className="login_background" src={LoginBackgroundImage} alt="LoginBackground"/>
                        </animated.div>
                    )
                })
            }
            
            <div className="form_Side">
                {
                    logoTransition.map(({item, props, key}) => {
                        return (<animated.img style={props} src={tyuteeLoginLogo} alt="tyuteeLoginLogo"/>)
                    })
                }
                <div className="formContainer">
                {
                    transitions.map(({item, props, key}) => {
                        const Component = Components[item];
                        return <Component key={key} style={props}/>
                    })
                }
                </div>
            </div>
        </div>
    )
}

export default Login
