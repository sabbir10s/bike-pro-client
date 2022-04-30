import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
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
    ] = useCreateUserWithEmailAndPassword(auth);

    const creatUser = event => {
        event.preventDefault();
        // const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password);
    }
    if (user) {
        navigate('/')
    }
    if (loading) {
        <Loading />
    }

    return (

        <div className='flex justify-center items-center bg-[#1b3e41] h-[85vh]'>
            <div className='w-[300px] p-5 bg-white'>
                <form onSubmit={creatUser}>
                    <span className='text-[#ff634e]  text-3xl'>Sign Up</span>
                    <input className='w-full border border-[#ff634e] mt-4 p-2 text-1xl' type="text" name='name' placeholder='Your Name' required />
                    <input className='w-full border border-[#ff634e] mt-4 p-2 text-1xl' type="email" name='email' placeholder='Your Email' required />
                    <input className='w-full border border-[#ff634e] mt-4 p-2 text-1xl' type="password" name='password' placeholder='Password' required />
                    {
                        error ? <span className='text-[#ff634e]'>{error?.message}</span> : ""
                    }
                    <input type="submit" className='bg-[#ff634e] hover:shadow-lg w-full text-white cursor-pointer mt-4 p-2 text-1xl' value="Sign UP" />
                    <span className='text-black mt-4 block'>Dont't have an account <Link to='/signin' className='text-[#ff634e] font-bold'>Sign In</Link> </span>
                </form>
                <SocialSignIn />
            </div>
        </div>
    );
};

export default SignUp;