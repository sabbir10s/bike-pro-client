import React from 'react';
import useProducts from '../../Shared/Hooks/useProducts';

const MenageInventory = () => {
    const [products, setProducts] = useProducts([])
    return (
        <div>
            <h1 className='text-center text-3xl'>Menage your inventory</h1>

            <div>
                {
                    products.map(product => <div className='w-[50%] mt-5 mx-auto'>
                        <table className='w-[600px]'>
                            <tr className='border border-[#ff634e]'>
                                <td className=' py-5 px-2 w-[15%]'><img className='w-[50px] mx-auto' src={product.picture} alt="" /></td>
                                <td className=' py-5 px-2 '><p>{product.product_name}</p></td>
                                <td className=' py-5 px-2 w-[15%] text-center'> <p>{product.quantity}</p></td>
                                <td className=' py-5 px-2 w-[15%]'> <button className='bg-[#ff634e] px-2 py-1 text-white'>Delete</button> </td>
                            </tr>
                        </table>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MenageInventory;