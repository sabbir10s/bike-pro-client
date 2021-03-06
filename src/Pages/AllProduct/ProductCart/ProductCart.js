import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCart = ({ product }) => {
    const { _id, product_name, quantity, picture, supplier, price } = product;
    const navigate = useNavigate();
    const handleUpdateStock = () => {
        navigate(`/inventory/updateProduct/${_id}`)
    }
    return (
        <div className='p-5 border hover:border-primary hover:border shadow-md hover:shadow-xl rounded-xl'>
            <div className=''>
                <div>
                    <img className='w-[250px]' src={picture} alt="" />
                    <p className='font-bold text-xl text-secondary mt-3'>{product_name}</p>
                    <p className='font-medium text-primary '>Price: ${price}</p>
                    <p className='text-secondary '>Quantity: {quantity}</p>
                    <p className='text-secondary '>Supplier Name: {supplier}</p>
                </div>

                <div>
                    <button onClick={() => handleUpdateStock(_id)} className='px-4 py-2 rounded leading-none text-white bg-[#ff634e] hover:text-white hover:bg-[#1b3e41] mt-2'>Update Stock</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCart;