import React from 'react';
import googleLogo from "../../../image/Google.png"
import facebookLogo from "../../../image/Facebook.png"
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (

        <div className='flex justify-center bg-[#1b3e41] h-[85vh]'>
            <form className='w-[300px] p-5 my-7 bg-white'>
                <span className='text-[#ff634e]  text-3xl'>Sign Up</span>
                <input className='w-full border border-[#ff634e] mt-4 p-2 text-1xl' type="text" name='name' placeholder='Your Name' required />
                <input className='w-full border border-[#ff634e] mt-4 p-2 text-1xl' type="email" name='email' placeholder='Your Email' required />
                <input className='w-full border border-[#ff634e] mt-4 p-2 text-1xl' type="password" name='password' placeholder='Password' required />
                <input type="submit" className='bg-[#ff634e] hover:shadow-lg w-full text-white cursor-pointer mt-4 p-2 text-1xl' value="Sign UP" />
                <span className='text-black mt-4 block'>Dont't have an account <Link to='/signin' className='text-[#ff634e] font-bold'>Sign In</Link> </span>

                <button className='border border-[#ff634e] hover:shadow-lg flex items-center justify-center gap-2 w-full cursor-pointer mt-4 p-2 text-1xl'>
                    <img className="w-[30px]" src={googleLogo} alt="" />
                    <span>Sign In With Google</span>
                </button>
                <button className='border border-[#ff634e] hover:shadow-lg flex items-center justify-center gap-2 w-full cursor-pointer mt-4 p-2 text-1xl'>
                    <img className="w-[30px]" src={facebookLogo} alt="" />
                    <span>Sign In With Facebook</span>
                </button>
            </form>
        </div>
    );
};

export default SignUp;