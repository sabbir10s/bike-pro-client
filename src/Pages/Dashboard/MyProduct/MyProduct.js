import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { RiDeleteBin6Line } from 'react-icons/ri';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import Loading from '../../../Shared/Loading/Loading';
import auth from '../../../firebase.init';

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
                        <h1 className='text-xl font-medium text-left p-3 md:p-5'>My Product List</h1>
                        <div className='bg-base-100 rounded-lg p-5 md:mx-5'>
                            <div className='grid grid-cols-4 gap-5'>
                                {
                                    myProducts.map(product => <div className='border border-primary rounded-lg shadow-md p-5 hover:shadow-primary cursor-pointer'>
                                        <div className='flex justify-end'>
                                            <button onClick={() => handleDelete(product._id)} className='text-error text-xl hover:text-[#fd1e00]'>
                                                <RiDeleteBin6Line />
                                            </button>
                                        </div>
                                        <div>
                                            <img className='w-[180px] mx-auto' src={product.picture} alt="" />

                                        </div>
                                        <div className='mt-3'>
                                            <p className='text-sm'>{product.product_name}</p>
                                            <p className='text-sm'>Quantity: {product.quantity} & Price: ${product.price}</p>
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