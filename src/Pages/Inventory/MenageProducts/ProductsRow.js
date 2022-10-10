import React, { useState } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import swal from 'sweetalert';
import UpdateProduct from './UpdateProduct';

const ProductsRow = ({ product, products, setProducts, index, reload, setReload }) => {
    const { product_name, picture, quantity, price, _id } = product;
    const [openModal, setOpenModal] = useState("");

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
            <td className='py-2'>{index + 1}</td>
            <td className='py-2'><img className='w-[50px]' src={picture} alt="" /></td>
            <td className='py-2' >
                <p className='text-neutral font-medium'>{product_name}</p>
                <span className='text-base-300 text-sm'> Quantity: {quantity}, Price: ${price}</span>

            </td>
            <td className='py-2'>

                <label onClick={() => setOpenModal(_id)} for="my-modal-6" class="bg-success text-base-100 px-3 py-1 rounded cursor-pointer">Update</label>
                {
                    openModal && <UpdateProduct products={products} productId={openModal} setOpenModal={setOpenModal} reload={reload} setReload={setReload} />
                }
            </td>
            <td className='py-2'>
                <button onClick={() => handleDelete(_id)} className='text-[#ff634e] text-2xl hover:text-[#fd1e00]'>
                    <span className='icon'>
                        <RiDeleteBin6Line />
                    </span>
                </button>
            </td>
        </tr>
    );
};

export default ProductsRow;