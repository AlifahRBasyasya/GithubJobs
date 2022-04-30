import Navbar from '../component/Navbar'

import { GoogleLogin } from 'react-google-login';
import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    let navigate = useNavigate();

    const onSuccess = (res) => {
        localStorage.setItem("user-info", JSON.stringify(res.profileObj))
        navigate("/job-list")
    }

    const onFailure = (res) => {
        console.warn(res);
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
                        buttonText="Continue with Google"
                        onSuccess={onSuccess}
                        onFailure={onFailure}
                        cookiePolicy={'single_host_origin'}
                    />
                    <p className='text-white m-3'>or</p>
                </div>
            </div>
        </Fragment>
    )
}

export default Login;