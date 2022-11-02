import React, { useState } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { BsPencilSquare } from 'react-icons/bs';
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
                    const url = `https://bike-pro-server.onrender.com/product/${id}`
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
        <div className='md:grid md:grid-cols-4  gap-5 lg:gap-14 items-center justify-center border rounded-lg md:rounded-none m-5 lg:m-0 md:border-t-0 md:border-x-0 md:border-b p-5'>
            <div className='md:col-span-1'><img className='mx-auto md:mx-0 w-1/2 md:w-1/3' src={picture} alt="" /></div>
            <div className='md:col-span-2 py-3 lg:py-0' >
                <p className='text-neutral font-medium'>{product_name}</p>
                <span className='text-base-300 text-sm'> Quantity: {quantity}, Price: ${price}</span>

            </div>
            <div className='md:py-0 md:col-span-1 flex items-center gap-14'>
                <label onClick={() => setOpenModal(_id)} for="my-modal-6" className="text-primary cursor-pointer flex items-center gap-1 relative"><span>Update</span><BsPencilSquare /></label>
                <div className=' absolute top-0'>
                    {
                        openModal && <UpdateProduct products={products} productId={openModal} setOpenModal={setOpenModal} reload={reload} setReload={setReload} />
                    }
                </div>
                <button onClick={() => handleDelete(_id)} className='text-[#ff634e] hover:text-[#fd1e00] flex items-center gap-1'>
                    <span>
                        Delete
                    </span>
                    <RiDeleteBin6Line />
                </button>
            </div>
        </div>
    );
};

export default ProductsRow;