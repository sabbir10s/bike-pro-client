import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialSignIn from '../SocialSignIn/SocialSignIn';
import Loading from '../../../Shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignIn = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const [email, setEmail] = useState('');
    const handleEmailBlur = (e) => {
        setEmail(e.target.value);
    }

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from.pathname || "/";

    if (loading || sending) {
        <Loading />
    }

    if (user) {
        navigate(from, { replace: true });
    }

    const handelSignInWithEmail = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password);
    }
    const resetPassword = async () => {
        await sendPasswordResetEmail(email);
        console.log(email);
        toast('Sent email');
    }

    return (

        <div className='flex justify-center bg-[#1b3e41]'>
            <div className='w-[300px] p-5 my-12 bg-white'>
                <form onSubmit={handelSignInWithEmail}>
                    <span className='text-[#ff634e]  text-3xl'>Sign In</span>
                    <input onBlur={handleEmailBlur} className='w-full border border-[#ff634e] mt-4 p-2 text-1xl' type="email" name='email' placeholder='Your Email' required />
                    <input className='w-full border border-[#ff634e] mt-4 p-2 text-1xl' type="password" name='password' placeholder='Your Password' />
                    {
                        error ? <span className='text-[#ff634e]'>{error?.message}</span> : ""
                    }
                    <input type="submit" className='bg-[#ff634e] hover:shadow-lg w-full text-white cursor-pointer mt-4 p-2 text-1xl' value="Sign In" />
                    <span className='text-black mt-4 block'>Forget password ? <button onClick={resetPassword} className='text-[#ff634e] font-bold'>Forget</button></span>
                    <span className='text-black mt-4 block'>Dont't have an account <Link to='/signup' className='text-[#ff634e] font-bold'>Sign Up</Link> </span>
                </form>
                <SocialSignIn />
            </div>
            <ToastContainer />
        </div>
    );
};

export default SignIn;