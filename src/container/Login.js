import Navbar from '../component/Navbar'

import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    let navigate = useNavigate();

    const onSuccess = (res) => {
        localStorage.setItem("user-info", JSON.stringify(res.profileObj));
        navigate("/job-list");
    }

    const onFailure = (res) => {
        console.warn(res);
    }

    const responseFacebook = (res) => {
        localStorage.setItem("user-info", JSON.stringify(res));
        navigate("/job-list");
    }
    
    return (
        <Fragment>
            <Navbar/>
            <div className='row justify-content-center m-5'>
                <div className='col-8 p-5 text-center border border-primary rounded bg-primary'>
                    <h1 className='text-white mb-5'>Login</h1>
                    <GoogleLogin
                        className="shadow-none rounded text-dark"
                        clientId="254472569906-mvbqulpv5c8p7upor4e071654d5t48pp.apps.googleusercontent.com"
                        icon={true}
                        buttonText="LOGIN WITH GOOGLE"
                        onSuccess={onSuccess}
                        onFailure={onFailure}
                        cookiePolicy={'none'}
                    />
                    <p className='text-white m-3'>or</p>
                    <FacebookLogin
                        appId="1007908566797800"
                        fields="name,email,picture"
                        scope="public_profile,user_friends"
                        callback={responseFacebook}
                        icon="fa-facebook"
                    />
                </div>
            </div>
        </Fragment>
    )
}

export default Login;