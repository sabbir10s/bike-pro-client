import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../Shared/Hooks/useProducts';
import "./MenageProduct.css"
import { RiDeleteBin6Line } from 'react-icons/ri';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Loading from '../../Shared/Loading/Loading';
const MenageProduct = () => {
    const [products, setProducts] = useProducts([]);
    const navigate = useNavigate();

    const handleUpdateStock = id => {
        navigate(`/allProducts/${id}`)
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
            <h1 className=' rounded text-center text-3xl text-[#ff634e] font-medium '>Menage All Products</h1>
            <div className='flex justify-center my-5'>

                <button onClick={() => navigate('/addProduct')} className='font-medium text-sm rounded bg-[#ff634e] hover:bg-[#1b3e41] hover:text-white px-2 py-1 text-white flex items-center gap-2 '> <span> Add New Product</span> <AiOutlineArrowRight /></button>
            </div>
            {
                products.length === 0 ? <Loading></Loading>
                    :
                    <div>
                        {
                            products.map(product => <div className='w-full md:w-[60%] lg:w-[50%] mb-2 mx-auto'>
                                <table className='w-full'>
                                    <tr className='border border-[#ff634e]'>
                                        <td className='py-5 px-2 w-[15%]'><img className='w-[50px] mx-auto' src={product.picture} alt="" /></td>
                                        <td className=' py-5 px-2 '><p>{product.product_name}</p></td>
                                        <td className=' py-5 px-2 w-[10%] text-center'> <p>{product.quantity}</p></td>
                                        <td className=' py-5 px-2 w-[15%] text-center'> <p>${product.price}</p></td>
                                        <td className=' py-5 px-2 w-[8%]'>
                                            <button onClick={() => handleDelete(product._id)} className='text-[#ff634e] text-xl hover:text-[#fd1e00]'>
                                                <span className='icon'>
                                                    <RiDeleteBin6Line />
                                                    <span className='tooltip text-sm font-medium'>Delete</span>
                                                </span>
                                            </button>
                                        </td>
                                        <td className=' py-5 px-2 w-[10%]'> <button onClick={() => handleUpdateStock(product._id)} className='text-sm font-medium text-[#ff634e] hover:underline hover:text-[#1b3e41]'>Update</button> </td>
                                    </tr>
                                </table>
                            </div>)
                        }
                    </div>
            }
        </div>
    );
};

export default MenageProduct;