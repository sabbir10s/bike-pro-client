import React from 'react';
import googleLogo from "../../../image/Google.png"
import facebookLogo from "../../../image/Facebook.png"


const SocialSignIn = ({ signInWithGoogle, signInWithFacebook }) => {



    return (
        <div className='flex gap-4 justify-center items-center'>

            <button onClick={() => signInWithGoogle()} className='rounded-full border border-primary hover:shadow-lg flex items-center justify-center cursor-pointer p-2'>
                <img className="w-[30px]" src={googleLogo} alt="" />
            </button>
            <button onClick={() => signInWithFacebook()} className='rounded-full border border-primary hover:shadow-lg flex items-center justify-center cursor-pointer p-2'>
                <img className="w-[30px]" src={facebookLogo} alt="" />
            </button>



        </div>
    );
};

export default SocialSignIn;