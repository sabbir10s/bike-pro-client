import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../Shared/Hooks/useProducts';
import "./MenageInventory.css"
import { RiDeleteBin6Line } from 'react-icons/ri';
const MenageInventory = () => {
    const [products, setProducts] = useProducts([]);
    const navigate = useNavigate();
    return (
        <div>
            <h1 className='text-center text-2xl bg-[#ff634e] text-white py-2 w-[50%] mx-auto '>Menage your inventory</h1>

            <div>
                {
                    products.map(product => <div className='w-full lg:w-[50%] mt-5 mx-auto'>
                        <table className='w-full'>
                            <tr className='border border-[#ff634e]'>
                                <td className='py-5 px-2 w-[15%]'><img className='w-[50px] mx-auto' src={product.picture} alt="" /></td>
                                <td className=' py-5 px-2 '><p>{product.product_name}</p></td>
                                <td className=' py-5 px-2 w-[15%] text-center'> <p>${product.price}</p></td>
                                <td className=' py-5 px-2 w-[12%]'>
                                    <button className='text-[#ff634e] text-2xl hover:text-[#fd1e00]'>
                                        <span className='icon'>
                                            <RiDeleteBin6Line />
                                            <span className='tooltip text-sm font-medium'>Delete</span>
                                        </span>
                                    </button>
                                </td>
                                <td className=' py-5 px-2 w-[15%]'> <button onClick={() => navigate('/addproduct')} className='bg-[#1b3e41] hover:bg-[#ff634e] px-2 py-1 text-white'>Add New</button> </td>
                            </tr>
                        </table>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MenageInventory;