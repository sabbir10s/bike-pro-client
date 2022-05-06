import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../Shared/Hooks/useProducts';
import "./MenageInventory.css"
import { RiDeleteBin6Line } from 'react-icons/ri';
import { AiOutlineArrowRight } from 'react-icons/ai';
const MenageInventory = () => {
    const [products, setProducts] = useProducts([]);
    const navigate = useNavigate();

    const handleUpdateStock = id => {
        navigate(`/inventory/${id}`)
    }
    const handleDelete = id => {
        const proceed = window.confirm("Are you sure? ")
        if (proceed) {
            const url = `https://lit-shelf-23459.herokuapp.com/product/${id}`
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining);
                })
        }
    }
    return (
        <div>
            <h1 className='text-center text-2xl bg-[#ff634e] text-white py-2 w-[50%] mx-auto '>Menage your inventory</h1>
            <div className='flex justify-center mt-4'>

                <button onClick={() => navigate('/addproduct')} className='border-2 font-medium rounded border-[#1b3e41] hover:bg-[#ff634e] hover:border-[#ff634e] hover:text-white px-2 py-1 text-[#1b3e41] flex items-center gap-2 '> <span> Add New Product</span> <AiOutlineArrowRight /></button>
            </div>
            <div>
                {
                    products.map(product => <div className='w-full lg:w-[50%] mt-5 mx-auto'>
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
                                <td className=' py-5 px-2 w-[15%]'> <button onClick={() => handleUpdateStock(product._id)} className='bg-[#1b3e41] hover:bg-[#ff634e] px-2 py-1 text-white'>Update</button> </td>
                            </tr>
                        </table>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MenageInventory;