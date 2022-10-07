import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCart = ({ product }) => {
    const { _id, product_name, quantity, picture, price } = product;
    const navigate = useNavigate();
    const handleUpdateStock = () => {
        navigate(`/updateStock/${_id}`)
    }
    return (
        <div onClick={() => handleUpdateStock(_id)} className='p-5 border border-white hover:border-primary shadow-lg shadow-primary/50 rounded-xl cursor-pointer'>
            <div className='w-full md:w-[180px] md:h-[180px] flex justify-center items-center'>
                <img src={picture} alt="" />
            </div>

            <div>
                <p className='font-medium text-secondary mt-3 text-sm'>{product_name}</p>
                <p className='text-primary font-bold text-xl'>${price}</p>
                <p className='text-secondary text-sm'>Quantity: {quantity}</p>
                <button className='px-4 py-2 rounded leading-none text-white bg-secondary hover:text-white hover:bg-primary mt-2 w-full'>Update Stock</button>
            </div>

        </div>
    );
};

export default ProductCart;