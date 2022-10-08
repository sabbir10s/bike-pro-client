import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialSignIn from '../SocialSignIn/SocialSignIn';
import Loading from '../../../Shared/Loading/Loading';
import logo from "../../../image/logo-bikepro_.png";

const SignUp = () => {
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile] = useUpdateProfile(auth);


    const creatUser = async event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        navigate('/')
    }
    if (user) {
        console.log(user);
    }
    if (loading) {
        <Loading />
    }

    return (

        <div className='grid lg:grid-cols-2 w-full'>
            <div className='bg-primary w-full h-screen flex justify-center items-center p-5 order-2 lg:order-1'>
                <div>
                    <img className='mx-auto w-[150px]' src={logo} alt="" />
                    <p className='text-center text-base-200 mt-2'>Bike Pro is one of the largest wholesale bicycle suppliers. We supply different types of brands of bicycles.  On this website, we manage our all product inventory.</p>
                    <img className='mx-auto mt-4 max-w-[350px]' src="https://assets.webiconspng.com/uploads/2017/09/Bicycles-PNG-Image-75551.png" alt="" />
                </div>
            </div>

            <div className='h-screen flex justify-center items-center mx-3 order-1 lg:order-2'>
                <div className='max-w-[450px]'>
                    <form onSubmit={creatUser}>
                        <h2 className='text-primary text-3xl text-center font-medium'>Welcome</h2>
                        <p className='text-primary/70 text-xl text-center'>Sign up your account</p>
                        <p className='mt-5 text-center'>Already have an account <Link to='/signIn' className='text-primary font-bold'>Sign In</Link> </p>
                        <input className='rounded-md w-full border border-primary mt-4 p-2 text-1xl' type="text" name='name' placeholder='Your Name' required />
                        <input className='rounded-md w-full border border-primary mt-4 p-2 text-1xl' type="email" name='email' placeholder='Your Email' required />
                        <input className='rounded-md w-full border border-primary mt-4 p-2 text-1xl' type="password" name='password' placeholder='Password' required />
                        {
                            error ? <span className='text-primary'>{error?.message}</span> : ""
                        }
                        <input type="submit" className='rounded-md bg-primary hover:shadow-lg w-full text-white cursor-pointer mt-4 p-2 text-1xl' value="Sign UP" />

                    </form>
                    <div className='flex items-center gap-1 my-5'>
                        <div className='border w-full'></div>
                        <p className='w-full text-center uppercase text-base-300'>Or sign up with</p>
                        <div className='border w-full'></div>
                    </div>
                    <SocialSignIn />
                </div>
            </div>
        </div>
    );
};

export default SignUp;