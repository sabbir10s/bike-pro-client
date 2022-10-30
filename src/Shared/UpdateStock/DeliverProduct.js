import React from 'react';
import { toast } from 'react-toastify';

const DeliverProduct = ({ reload, setIsReload, product, Id }) => {

    const handelDelivered = (e) => {
        e.preventDefault()
        const clientName = e.target.name.value;
        const email = e.target.email.value;
        const address = e.target.address.value;
        const product_name = product.product_name
        const deliveredQuantity = parseInt(e.target.quantity.value);
        const quantity = product.quantity - deliveredQuantity;

        fetch(`https://bike-pro-server.onrender.com/product/${Id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ quantity })
        })
            .then(res => res.json())
            .then(data => {
                setIsReload(!reload)
                e.target.reset()
                toast.success('Product Delivered Successfully');
            });

        fetch(`https://bike-pro-server.onrender.com/deliver`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ clientName, email, address, product_name, deliveredQuantity })
        })
            .then(res => res.json())
            .then(data => {
            })
    }

    return (
        <div>

            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <p className='flex justify-end'> <label htmlFor="my-modal-6" className="bg-black w-8 h-8 p-3 rounded-full text-base-100 flex items-center justify-center cursor-pointer">X</label></p>
                    <div className="modal-action">
                        <div className='w-full'>
                            <p className='text-xl text-center text-primary font-bold'>{product.product_name}</p>
                            <form onSubmit={handelDelivered}>
                                <label htmlFor="name" className='text-sm block mt-3'>Customer Name</label>
                                <input type="text" name='name' id='name' placeholder='Customer Name' className='border border-primary w-full py-2  rounded pl-2' required />
                                <label htmlFor="email" className='text-sm block mt-3'>Email</label>
                                <input type="email" name='email' id='email' placeholder='Email' className='border border-primary w-full py-2 rounded pl-2' required />
                                <label htmlFor="address" className='text-sm block mt-3'>Address</label>
                                <input type="address" name='address' id='address' placeholder='Address' className='border border-primary w-full py-2 rounded pl-2' required />
                                <label htmlFor="quantity" className='text-sm block mt-3'>Quantity</label>
                                <input type="number" name='quantity' id='quantity' className='border border-primary w-1/2 py-2 rounded' required />
                                <div className='flex justify-end'>
                                    <input type="submit" value="Deliver" className='cursor-pointer bg-primary px-5 py-2 text-base-100 rounded mt-3' />
                                </div>
                            </form>

                        </div>
                    </div>
                    <div className='flex justify-end'>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeliverProduct;