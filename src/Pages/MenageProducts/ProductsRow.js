import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { Navigate } from 'react-router-dom';

const ProductsRow = ({ product, setProducts, index }) => {
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
                    console.log(data);
                })
        }
    }

    return (
        <tr className='border border-[#ff634e]'>
            <td>{index + 1}</td>
            <td><img className='w-[50px] mx-auto' src={picture} alt="" /></td>
            <td ><p>{product_name}</p></td>
            <td> <p>{quantity}</p></td>
            <td> <p>${price}</p></td>
            <td>
                <button onClick={() => handleDelete(_id)} className='text-[#ff634e] text-xl hover:text-[#fd1e00]'>
                    <span className='icon'>
                        <RiDeleteBin6Line />
                    </span>
                </button>
            </td>
            <td> <button onClick={() => handleUpdateStock(_id)} className='text-sm font-medium text-[#ff634e] hover:underline hover:text-[#1b3e41]'>Update</button> </td>
        </tr>
    );
};

export default ProductsRow;