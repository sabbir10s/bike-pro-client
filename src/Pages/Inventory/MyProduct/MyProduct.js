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
    const [myProducts, setMyProducts] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const getProducts = async () => {
            const email = user.email;
            const url = `https://lit-shelf-23459.herokuapp.com/myproduct?email=${email}`
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
            const url = `https://lit-shelf-23459.herokuapp.com/product/${id}`
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
        <div>
            <p className='text-2xl text-center mb-3'>My Product List</p>
            {
                myProducts.length === 0 ? <Loading></Loading>
                    :
                    <div>
                        {
                            myProducts.map(product => <div className='w-[95%] md:w-[75%] lg:w-[50%] mx-auto'>
                                <table className='w-full mb-3'>
                                    <tr className='border border-[#ff634e]'>
                                        <td className='py-5 px-2 w-[15%]'><img className='w-[50px] mx-auto' src={product.picture} alt="" /></td>
                                        <td className=' py-5 px-2 '><p>{product.product_name}</p></td>
                                        <td className=' py-5 px-2 w-[15%]'><p>{product.quantity}</p></td>
                                        <td className=' py-5 px-2 w-[15%] text-center'> <p>${product.price}</p></td>
                                        <td className=' py-5 px-2 w-[12%]'>
                                            <button onClick={() => handleDelete(product._id)} className='text-[#ff634e] text-2xl hover:text-[#fd1e00]'>
                                                <span className='icon'>
                                                    <RiDeleteBin6Line />
                                                </span>
                                            </button>
                                        </td>
                                    </tr>
                                </table>
                            </div>)
                        }
                    </div>
            }
        </div>
    );
};

export default MyProduct;