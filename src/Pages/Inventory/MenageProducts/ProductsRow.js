import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

const ProductsRow = ({ product, products, setProducts, index }) => {
    const { product_name, picture, quantity, price, _id } = product;
    const navigate = useNavigate()
    const handleUpdateStock = id => {
        navigate(`/updateStock/${id}`)
    }

    const handleDelete = id => {

        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this product",
            icon: "warning",
            dangerMode: true,
            buttons: true,
        })
            .then(willDelete => {
                if (willDelete) {
                    const url = `http://localhost:5000/product/${id}`
                    fetch(url, {
                        method: "DELETE"
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount) {
                                swal("Your product has been deleted!", {
                                    icon: "success",
                                });
                                const remaining = products.filter(product => product._id !== id);
                                setProducts(remaining);
                            }

                        })
                }
                else {
                    swal("Your product is safe!");
                }
            });

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
            <td> <button onClick={() => handleUpdateStock(_id)} className='text-sm font-medium text-success hover:underline hover:text-primary'>Update Stock</button> </td>
        </tr>
    );
};

export default ProductsRow;