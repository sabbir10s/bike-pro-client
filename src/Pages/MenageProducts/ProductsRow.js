import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { Navigate } from 'react-router-dom';

const ProductsRow = ({ product, products, setProducts, index }) => {
    const { product_name, picture, quantity, price, _id } = product;
    const handleUpdateStock = id => {
        Navigate(`/allProducts/${id}`)
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
        <tr>
            <td>{index + 1}</td>
            <td><img className='w-[50px]' src={picture} alt="" /></td>
            <td >
                <p className='text-primary font-bold'>{product_name}</p>
                <span className='text-neutral'> Quantity: {quantity}, Price: ${price}</span>

            </td>
            <td>
                <button onClick={() => handleDelete(_id)} className='text-[#ff634e] text-2xl hover:text-[#fd1e00]'>
                    <span className='icon'>
                        <RiDeleteBin6Line />
                    </span>
                </button>
            </td>
            <td> <button onClick={() => handleUpdateStock(_id)} className='text-sm font-medium text-success hover:underline hover:text-primary'>Update</button> </td>
        </tr>
    );
};

export default ProductsRow;