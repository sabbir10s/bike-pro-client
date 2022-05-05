import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { RiDeleteBin6Line } from 'react-icons/ri';

const MyProduct = () => {
    const [user] = useAuthState(auth);
    const [myProducts, setMyProducts] = useState([]);

    useEffect(() => {
        const email = user.email;
        fetch(`http://localhost:5000/myproduct?email=${email}`)
            .then(res => res.json())
            .then(data => setMyProducts(data))
    }, [user])
    console.log(myProducts);
    const handleDelete = id => {
        const proceed = window.confirm("Are you sure? ")
        if (proceed) {
            const url = `http://localhost:5000/product/${id}`
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
                myProducts.map(product => <div className='w-[50%] mx-auto'>
                    <table className='w-full'>
                        <tr className='border border-[#ff634e]'>
                            <td className='py-5 px-2 w-[15%]'><img className='w-[50px] mx-auto' src={product.picture} alt="" /></td>
                            <td className=' py-5 px-2 '><p>{product.product_name}</p></td>
                            <td className=' py-5 px-2 w-[15%] text-center'> <p>${product.price}</p></td>
                            <td className=' py-5 px-2 w-[12%]'>
                                <button onClick={() => handleDelete(product._id)} className='text-[#ff634e] text-2xl hover:text-[#fd1e00]'>
                                    <span className='icon'>
                                        <RiDeleteBin6Line />
                                        <span className='tooltip text-sm font-medium'>Delete</span>
                                    </span>
                                </button>
                            </td>
                        </tr>
                    </table>
                </div>)
            }
        </div>
    );
};

export default MyProduct;