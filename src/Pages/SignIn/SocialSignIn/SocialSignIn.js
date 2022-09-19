import React from 'react';
import googleLogo from "../../../image/Google.png"
import facebookLogo from "../../../image/Facebook.png"


const SocialSignIn = ({ signInWithGoogle, signInWithFacebook }) => {



    return (
        <div>

            <button onClick={() => signInWithGoogle()} className='rounded-md border border-[#ff634e] hover:shadow-lg flex items-center justify-center gap-2 w-full cursor-pointer mt-4 p-2 text-1xl'>
                <img className="w-[30px]" src={googleLogo} alt="" />
                <span>Sign In With Google</span>
            </button>
            <button onClick={() => signInWithFacebook()} className='rounded-md border border-[#ff634e] hover:shadow-lg flex items-center justify-center gap-2 w-full cursor-pointer mt-2 p-2 text-1xl'>
                <img className="w-[30px]" src={facebookLogo} alt="" />
                <span>Sign In With Facebook</span>
            </button>



        </div>
    );
};

export default SocialSignIn;