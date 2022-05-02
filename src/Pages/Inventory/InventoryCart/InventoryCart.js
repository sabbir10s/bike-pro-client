import React from 'react';
import { useNavigate } from 'react-router-dom';

const InventoryCart = ({ product }) => {
    const { _id, product_name, quantity, picture, supplier, price } = product;
    const navigate = useNavigate();
    const handleUpdateStock = () => {
        navigate(`/inventory/${_id}`)
    }
    return (
        <div className='p-5 border-2 border-[#1b3e41] hover:border-[#ff634e] hover:border-2 hover:shadow-lg'>
            <img className='w-[250px]' src={picture} alt="" />
            <p className='font-bold text-xl text-[#1b3e41] mt-2'>{product_name}</p>
            <p className='font-medium text-[#ff634e] '>Price: ${price}</p>
            <p className='text-[#1b3e41] '>Quantity: {quantity}</p>
            <p className='text-[#1b3e41] '>Supplier Name: {supplier}</p>

            <button onClick={() => handleUpdateStock(_id)} className='px-4 py-2 leading-none text-white bg-[#ff634e] hover:text-white hover:bg-[#1b3e41] mt-2'>Update Stock</button>
        </div>
    );
};

export default InventoryCart;