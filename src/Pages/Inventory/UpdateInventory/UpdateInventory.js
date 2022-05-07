import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateInventory = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const [reload, setIsReload] = useState(true)
    useEffect(() => {
        fetch(`https://lit-shelf-23459.herokuapp.com/product/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [reload])


    const handelIncreaseQuantity = event => {
        event.preventDefault();
        const inputQuantity = event.target.quantity.value;
        const quantity = parseInt(inputQuantity) + product.quantity;
        fetch(`https://lit-shelf-23459.herokuapp.com/product/${productId}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ quantity })
        })
            .then(res => res.json())
            .then(data => {
                console.log("Success", data);
                event.target.reset();
                setIsReload(!reload)
            })
    }
    const handelDelivered = () => {
        const quantity = product.quantity - 1;
        // console.log(quantity);
        fetch(`https://lit-shelf-23459.herokuapp.com/product/${productId}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ quantity })
        })
            .then(res => res.json())
            .then(data => {
                setIsReload(!reload)
                console.log("Success", data);
                // alert("")
            })
    }
    return (
        <div className='flex justify-center mb-10'>
            <div className='w-full mx-10 lg:w-[50%]'>
                <img className='w-[350px] mx-auto' src={product.picture} alt="" />
                <p className='text-[#ff634e] mt-2 font-semibold text-3xl'>{product.product_name}</p>
                <p className='font-semibold text-lg text-gray-500'>Supplier - {product.supplier}</p>
                <p className='text-[#ff634e] mt-2 font-semibold'>Price: {product.price}</p>
                <p className='text-justify text-gray-500'>{product.description}</p>

                <div className='flex flex-col lg:flex-row md:flex-row gap-4 mt-2'>
                    <div className='border p-3 w-[100%] lg:w-[50%] md:w-[50%] shadow-lg'>
                        <p className='font-semibold text-[#ff634e] text-lg mt-1'>Product Quantity: {product.quantity}</p>
                        <button onClick={handelDelivered} className='px-4 py-2 leading-none text-white bg-[#ff634e] hover:text-white hover:bg-[#1b3e41] mt-4 w-full'>Delivered One</button>
                    </div>
                    <div className='border p-3  w-[100%] lg:w-[50%] md:w-[50%] shadow-lg'>
                        <form onSubmit={handelIncreaseQuantity}>
                            <input className='w-full block border-2 p-1 border-[#ff634e]' type="number" name='quantity' required placeholder='Restock the Product' />
                            <input className='w-full px-4 py-2 leading-none text-white bg-[#ff634e] hover:text-white hover:bg-[#1b3e41] mt-3' type="submit" value="Increase Quantity" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateInventory;