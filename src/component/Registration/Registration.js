import React from 'react';
import './Registration.css'
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Registration = () => {
    const history = useHistory();
    const location = useLocation();
    console.log(location.state?.from)
    const redirect_uri = location.state?.from || '/home';

    const { handleRegistration, handleEmail, handlePassword, hanldeUserName, error, setError, setUserName, loginUsingGoogle } = useAuth()

    const handleGoogleLogIn = () => {
        loginUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
            })
    }

    const controlRegistration = (e) => {
        e.preventDefault()
        handleRegistration()
            .then(result => {
                const user = result.user
                console.log(user)
                setError('');
                setUserName(user)
                history.push(redirect_uri)
                window.location.reload()


            })
    }
    return (
        <div className='login-conatainer row'>
            <div className="col-12 col-lg-12 register-body">
                <h2 className='mt-4'>Welcome to Spring Hill Care</h2>
                <h1>Create Account</h1>
                <div className='input-container mt-4'>

                    <form onSubmit={controlRegistration}>
                        <input onBlur={hanldeUserName} className='log-input' type="text" name="" id="" placeholder='User Name' /><br />
                        <input onBlur={handleEmail} className='log-input' type="email" name="" id="" placeholder='Email' required /><br />
                        <input onBlur={handlePassword} className='log-input' type="password" name="" id="" placeholder='Password' required /><br />
                        <div className='text-danger'>{error}</div>

                        <button className='log-button' type='submit'>Registration</button>
                        {/* <input type="submit" onClick={handleRegistration} value="Registration" /> */}
                    </form>

                    <p>Already have an account?<Link to='/login' className='log-option'>Log In</Link></p>
                    <div>----------Or----------</div>
                    <button onClick={handleGoogleLogIn} className='log-button'>Google Sign In</button>
                </div>
            </div>

        </div>
    );
};

export default Registration;