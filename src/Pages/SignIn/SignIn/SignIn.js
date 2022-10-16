import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import SocialSignIn from '../SocialSignIn/SocialSignIn';
import Loading from '../../../Shared/Loading/Loading';
import 'react-toastify/dist/ReactToastify.css';
import useToken from '../../../Shared/Hooks/useToken';
import { toast } from 'react-toastify';
import logo from "../../../image/logo-bikepro_.png";
import './signIn.css'
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

        <div>
            <div className='grid lg:grid-cols-2 w-full '>
                <div className='bg-primary w-full h-screen flex justify-center items-center p-5 order-2 lg:order-1'>
                    <div>
                        <img className='mx-auto w-[150px]' src={logo} alt="" />
                        <p className='text-center text-base-200 mt-2'>Bike Pro is one of the largest wholesale bicycle suppliers. We supply different types of brands of bicycles.  On this website, we manage our all product inventory.</p>
                        <img className='mx-auto mt-4 max-w-[350px]' src="https://assets.webiconspng.com/uploads/2017/09/Bicycles-PNG-Image-75551.png" alt="" />
                    </div>
                </div>
                <div className='h-screen flex justify-center items-center mx-3 order-1 lg:order-2'>
                    <div className='max-w-[450px]'>
                        <form onSubmit={handelSignInWithEmail}>
                            <h2 className='text-primary text-3xl text-center font-medium'>Welcome Back</h2>
                            <p className='text-primary/70 text-xl text-center'>Please sign in your account</p>
                            <input onBlur={handleEmailBlur} className=' rounded-md w-full border border-primary mt-4 p-2 text-1xl' type="email" name='email' defaultValue='user@gmail.com' placeholder='Your Email' required />
                            <input className=' rounded-md w-full border border-primary mt-4 p-2 text-1xl' type="password" name='password' defaultValue='123456' placeholder='Your Password' autoFocus={true} />
                            {
                                error ? <span className='text-primary'>{error?.message}</span> : ""
                            }
                            <input type="submit" className=' rounded-md bg-primary hover:shadow-lg w-full text-white cursor-pointer mt-4 p-2 text-1xl' value="Sign In" />
                        </form>
                        <div className='flex justify-between mt-4'>
                            <button onClick={resetPassword} className='hover:text-primary hover:underline '>Forget password?</button>
                            <div>
                                <Link to='/signup' className='text-primary font-bold'>Sign Up</Link>
                            </div>
                        </div>
                        <div className='flex items-center gap-1 my-5'>
                            <div className='border w-full'></div>
                            <p className='w-full text-center uppercase text-base-300'>Or login with</p>
                            <div className='border w-full'></div>
                        </div>
                        <SocialSignIn signInWithGoogle={signInWithGoogle} signInWithFacebook={signInWithFacebook} />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SignIn;
