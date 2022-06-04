import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialSignIn from '../SocialSignIn/SocialSignIn';
import Loading from '../../../Shared/Loading/Loading';

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

        <div className='flex justify-center h-screen items-center bg-secondary'>
            <div className='max-w-[400px] p-5 my-8 bg-white rounded-lg'>
                <form onSubmit={creatUser}>
                    <span className='text-[#ff634e]  text-3xl'>Sign Up</span>
                    <input className='rounded-md w-full border border-[#ff634e] mt-4 p-2 text-1xl' type="text" name='name' placeholder='Your Name' required />
                    <input className='rounded-md w-full border border-[#ff634e] mt-4 p-2 text-1xl' type="email" name='email' placeholder='Your Email' required />
                    <input className='rounded-md w-full border border-[#ff634e] mt-4 p-2 text-1xl' type="password" name='password' placeholder='Password' required />
                    {
                        error ? <span className='text-[#ff634e]'>{error?.message}</span> : ""
                    }
                    <input type="submit" className='rounded-md bg-[#ff634e] hover:shadow-lg w-full text-white cursor-pointer mt-4 p-2 text-1xl' value="Sign UP" />
                    <span className='text-black mt-4 block'>Dont't have an account <Link to='/signIn' className='text-[#ff634e] font-bold'>Sign In</Link> </span>
                </form>
                <SocialSignIn />
            </div>
        </div>
    );
};

export default SignUp;