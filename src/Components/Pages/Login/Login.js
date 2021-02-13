import React, {useState} from 'react'

import './Login.css'

import LoginBackgroundImage from './LoginWallpaper.png'
import tyuteeLoginLogo from './tyuteeLoginLogo.png'

import LoginForm from './LoginForm.js'
import ForgotPassword from './ForgotPassword.js'

function Login() {

    const [formFieldValues, setFormFieldValues] = useState({
        role: 'tutee',
        userEmail: '',
        username: '',
        password: '',
        showPassword: false,
      });

    const [formType, setFormType] = useState('login');

    return (
        <div className="login_Container">
            <div className="image_container">
                <img className="login_background" src={LoginBackgroundImage} alt="LoginBackground"/>
            </div>
            <div className="login_form_Container">
                <img src={tyuteeLoginLogo} alt="tyuteeLoginLogo"/>
                {
                    formType === 'login' ? 
                        <LoginForm formFields={formFieldValues} setFields={setFormFieldValues} setFormType={setFormType}/> : 
                        <ForgotPassword formFields={formFieldValues} setFields={setFormFieldValues} setFormType={setFormType}/>
                }
            </div>
        </div>
    )
}

export default Login
