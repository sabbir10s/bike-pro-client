import React, { useRef } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';

const UpdateProduct = ({ products, productId, setOpenModal, reload, setReload }) => {
    const product = products?.find((product) => product?._id === productId)
    const { _id, product_name, quantity, price } = product
    const getName = useRef()
    const getQuantity = useRef()
    const getPrice = useRef()
    const getPicture = useRef()
    const handleSubmitData = event => {
        event.preventDefault();
        console.log("handle", _id);
        const product_name = getName.current.value;
        const quantity = getQuantity.current.value
        const price = getPrice.current.value
        const picture = getPicture.current.value
        const product = { product_name, quantity, price, picture }
        console.log(product);
        const url = `http://localhost:5000/productInfo/${_id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setReload(!reload)
                    setOpenModal('')
                }

            })
    }

    const handleClose = () => {
        setOpenModal('')
    }

    return (
        <div>
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">

                <div class="modal-box">
                    <div className='flex justify-end mb-2 '>
                        <label onClick={handleClose} htmlFor="my-modal-6" ><AiFillCloseCircle className='text-4xl cursor-pointer' /></label>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="name">Product Name</label>
                        <input className='text-left p-1 rounded border border-primary w-full' type="text" name='name' defaultValue={product_name} ref={getName} />
                        <label className='mt-2' htmlFor="quantity">Quantity</label>
                        <input className='text-left p-1 rounded border border-primary w-full' type="number" name='quantity' defaultValue={quantity} ref={getQuantity} />
                        <label className='mt-2' htmlFor="price">Price</label>
                        <input className='mt-2 text-left p-1 rounded border border-primary w-full' type="number" name='price' defaultValue={price} ref={getPrice} />
                    </div>
                    <div class="modal-action">
                        <label onClick={handleSubmitData} for="my-modal-6" class="btn"> Submit</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;