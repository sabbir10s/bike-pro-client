import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCart = ({ product }) => {
    const { _id, product_name, quantity, picture, price } = product;
    const navigate = useNavigate();
    const handleUpdateStock = () => {
        navigate(`/updateStock/${_id}`)
    }
    return (
        <div className='p-5 border shadow-lg hover:border-primary hover:shadow-lg hover:shadow-primary/50 rounded-xl cursor-pointer'>
            <div>
                <img className='h-[150px] w-[150px] mx-auto' src={picture} alt="" />
                <p className='font-bold text-secondary mt-3'>{product_name}</p>
                <p className='font-medium text-primary '>Price: ${price}</p>
                <p className='text-secondary '>Quantity: {quantity}</p>
            </div>

            <div>
                <button onClick={() => handleUpdateStock(_id)} className='px-4 py-2 rounded leading-none text-white bg-[#ff634e] hover:text-white hover:bg-[#1b3e41] mt-2'>Update Stock</button>
            </div>

        </div>
    );
};

export default ProductCart;