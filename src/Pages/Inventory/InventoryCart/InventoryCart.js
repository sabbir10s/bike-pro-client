import React from 'react';
import { useNavigate } from 'react-router-dom';

const InventoryCart = ({ product }) => {
    console.log(product);
    const { _id, product_name, quantity, picture, supplier, description } = product;
    const navigate = useNavigate();
    const handleUpdateStock = () => {
        navigate(`/inventory/${_id}`)
    }
    return (
        <div className='p-5 border-2 border-[#1b3e41] hover:border-[#ff634e] hover:border-2 rounded-lg'>
            <img className='w-[250px]' src={picture} alt="" />
            <p>{product_name}</p>
            <p>{quantity}</p>
            <p>{supplier}</p>
            <p>{description}</p>
            <button onClick={() => handleUpdateStock(_id)} className='inline-block px-4 py-2 leading-none rounded text-white bg-[#ff634e] hover:text-white hover:bg-[#1b3e41] mt-4 lg:mt-0'>Update Stock</button>
        </div>
    );
};

export default InventoryCart;