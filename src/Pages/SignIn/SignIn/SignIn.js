import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import SocialSignIn from '../SocialSignIn/SocialSignIn';
import Loading from '../../../Shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useToken from '../../../Shared/Hooks/useToken';

const SignIn = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle, googleUser, googleLoading] = useSignInWithGoogle(auth);
    const [signInWithFacebook, fbUser, fbLoading] = useSignInWithFacebook(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const [email, setEmail] = useState('');
    const handleEmailBlur = (e) => {
        setEmail(e.target.value);
    }
    const navigate = useNavigate();
    const location = useLocation();
    const [token] = useToken(user || googleUser || fbUser)
    const from = location.state?.from?.pathname || "/";

    if (loading || sending || googleLoading || fbLoading) {
        <Loading />
    }

    if (token) {
        navigate(from, { replace: true });
    }

    console.log(token);

    const handelSignInWithEmail = async event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        await signInWithEmailAndPassword(email, password);
    }
    const resetPassword = async () => {
        await sendPasswordResetEmail(email);
        console.log(email);
        toast('Sent email');
    }

    return (

        <div className='flex justify-center h-screen bg-secondary'>
            <div className='max-w-[400px] p-5 my-12 bg-white rounded-lg'>
                <form onSubmit={handelSignInWithEmail}>
                    <span className='text-[#ff634e]  text-3xl'>Sign In</span>
                    <input onBlur={handleEmailBlur} className=' rounded-md w-full border border-[#ff634e] mt-4 p-2 text-1xl' type="email" name='email' defaultValue='user@gmail.com' placeholder='Your Email' required />
                    <input className=' rounded-md w-full border border-[#ff634e] mt-4 p-2 text-1xl' type="password" name='password' defaultValue='123456' placeholder='Your Password' />
                    {
                        error ? <span className='text-[#ff634e]'>{error?.message}</span> : ""
                    }
                    <input type="submit" className=' rounded-md bg-[#ff634e] hover:shadow-lg w-full text-white cursor-pointer mt-4 p-2 text-1xl' value="Sign In" />
                    <span className='text-black mt-4 block'>Forget password ? <button onClick={resetPassword} className='text-[#ff634e] font-bold'>Forget</button></span>
                    <span className='text-black mt-4 block'>Dont't have an account <Link to='/signup' className='text-[#ff634e] font-bold'>Sign Up</Link> </span>
                </form>
                <SocialSignIn signInWithGoogle={signInWithGoogle} signInWithFacebook={signInWithFacebook} />
            </div>
            <ToastContainer />
        </div>
    );
};

export default SignIn;
