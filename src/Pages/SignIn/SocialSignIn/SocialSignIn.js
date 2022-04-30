import React from 'react';
import googleLogo from "../../../image/Google.png"
import facebookLogo from "../../../image/Facebook.png"
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../../Shared/Loading/Loading';

const SocialSignIn = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithFacebook, fbUser, fbLoading, fbError] = useSignInWithFacebook(auth);
    if (googleUser || fbUser) {
        navigate('/')
    }
    if (googleLoading || fbLoading) {
        <Loading />
    }
    return (
        <div>
            {
                googleError ? <span className='text-[#ff634e]'>{googleError?.message}</span> : ""
            }
            <button onClick={() => signInWithGoogle()} className='border border-[#ff634e] hover:shadow-lg flex items-center justify-center gap-2 w-full cursor-pointer mt-4 p-2 text-1xl'>
                <img className="w-[30px]" src={googleLogo} alt="" />
                <span>Sign In With Google</span>
            </button>
            {
                fbError ? <span className='text-[#ff634e]'>{fbError?.message}</span> : ""
            }
            <button onClick={() => signInWithFacebook()} className='border border-[#ff634e] hover:shadow-lg flex items-center justify-center gap-2 w-full cursor-pointer mt-2 p-2 text-1xl'>
                <img className="w-[30px]" src={facebookLogo} alt="" />
                <span>Sign In With Facebook</span>
            </button>



        </div>
    );
};

export default SocialSignIn;