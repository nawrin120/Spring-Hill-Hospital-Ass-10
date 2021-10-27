import React from 'react';
import './Login.css';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';



const Login = () => {
    const history = useHistory();
    const location = useLocation();
    console.log(location.state?.from)
    const redirect_uri = location.state?.from || '/home';



    const { loginUsingGoogle, processLogedIn, handleEmail, handlePassword, setError, setUser, setIsLoading, error } = useAuth()

    const handleGoogleLogIn = () => {
        loginUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
            })
    }

    const handleProcessLogIn = (e) => {
        e.preventDefault()

        processLogedIn()

            .then(result => {
                const user = result?.user;
                setError('')
                console.log(user)
                setUser(user);
                history.push(redirect_uri)


                window.location.reload()


            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => setIsLoading(true))

    }
    return (
        <div className=' login-conatainer row'>
            <div className="col-12 col-lg-6">

                <h2 className='my-5'>Welcome to Spring Hill Care</h2>

                <div className='input-container'>

                    <form onSubmit={handleProcessLogIn}>

                        <input className='email' onBlur={handleEmail} type="email" name="" id="" placeholder='Email ' /> <br />
                        <input className='password' onBlur={handlePassword} type="password" name="" id="" placeholder='Password' /><br />
                        <div className='text-danger'>{error}</div>
                        <button className='log-button' type='submit' onClick={handleProcessLogIn}>Log In</button>

                    </form>
                    <br />
                    <p>------------ OR ------------</p>
                    <button className='log-button' onClick={handleGoogleLogIn} >Sign In With Google</button><br /><br />

                    <p> Do Not Have Any Account? <Link to='/registration' className='log-option'>Create Account</Link></p>
                </div>
            </div>






        </div>
    );
};

export default Login;