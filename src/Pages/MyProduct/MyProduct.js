import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { RiDeleteBin6Line } from 'react-icons/ri';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const MyProduct = () => {
    const [user] = useAuthState(auth);
    const email = user?.email;
    const [myProducts, setMyProducts] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const getProducts = async () => {

            const url = `https://bike-pro-server.onrender.com/myproduct?email=${email}`
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                setMyProducts(data)
            }
            catch (error) {
                console.log(error.message);
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth)
                    navigate('/signIn')
                }
            }
        }
        getProducts();
    }, [user])

    const handleDelete = id => {
        const proceed = window.confirm("Are you sure? ")
        if (proceed) {
            const url = `https://bike-pro-server.onrender.com/product/${id}`
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = myProducts.filter(product => product._id !== id);
                    setMyProducts(remaining);
                })
        }
    }

    return (
        <>
            {
                myProducts.length === 0 ? <div className='h-screen flex justify-center items-center'><h1 className='text-center text-4xl text-gray-400'>No product found yet!</h1></div>
                    :
                    <div>
                        <h1 className='text-xl font-medium text-left pt-5 pb-5 md:pt-0'>My Product List</h1>
                        <div className='bg-base-100 rounded-lg p-5'>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 group-hover:block'>
                                {
                                    myProducts.map(({ _id, picture, product_name, price, quantity }) => <div className='border border-primary rounded-lg shadow-md p-5 hover:shadow-primary cursor-pointer'>
                                        <div className='flex justify-end'>
                                            <button onClick={() => handleDelete(_id)} className='text-error text-xl hover:text-[#fd1e00] hidden group'>
                                                <RiDeleteBin6Line />
                                            </button>
                                        </div>
                                        <div>
                                            <img className='w-[180px] mx-auto' src={picture} alt="" />

                                        </div>
                                        <div className='mt-3'>
                                            <p className='text-sm'>{product_name}</p>
                                            <p className='text-sm'>Quantity: {quantity} & Price: ${price}</p>
                                            <p ></p>
                                        </div>
                                    </div>)
                                }
                            </div>
                        </div>
                    </div>
            }
        </>
    );
};

export default MyProduct;