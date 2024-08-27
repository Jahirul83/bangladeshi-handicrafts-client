import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    const navigate = useNavigate();


    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                navigate('/')
            })
    }
    return (
        <div>
            <div className="divider"></div>
            <button onClick={handleGoogleSignIn} className="btn btn-block"><FcGoogle></FcGoogle>Google</button>
        </div>
    );
};

export default SocialLogin;