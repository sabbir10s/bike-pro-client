import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateProductStock = () => {
    const { Id } = useParams();
    const [product, setProduct] = useState({});
    const [reload, setIsReload] = useState(true)
    useEffect(() => {
        fetch(`http://localhost:5000/product/${Id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [Id, reload])


    const handelIncreaseQuantity = event => {
        event.preventDefault();
        const inputQuantity = event.target.quantity.value;
        const quantity = parseInt(inputQuantity) + product.quantity;
        fetch(`http://localhost:5000/product/${Id}`, {
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
                toast('Product Added Successfully');
                setIsReload(!reload)
            })
    }
    const handelDelivered = () => {
        const quantity = product.quantity - 1;
        fetch(`http://localhost:5000/product/${Id}`, {
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
                toast('Product Delivered Successfully');
            })
    }
    return (
        <div className=' container mx-auto flex justify-center items-center h-screen'>
            <ToastContainer />
            <div className='w-full '>
                <div className='grid grid-cols-3'>
                    <div className=' col-span-1 flex justify-center items-center border-2 rounded-lg border-primary'>
                        <img className='w-[250px]' src={product.picture} alt="" />
                    </div>
                    <dir className='col-span-2'>
                        <p className='text-secondary font-bold mt-2 text-4xl'>{product.product_name}</p>
                        <p className='font-bold text-xl my-2 text-primary'>${product.price}</p>
                        <div className='flex flex-col lg:flex-row md:flex-row gap-4 my-5'>
                            <div className='border p-3 w-[100%] lg:w-[50%] md:w-[50%] shadow-lg'>
                                <div><span className='text-gray-500'>Product Quantity-</span> <span className='text-primary font-bold text-xl'>{product.quantity}</span></div>
                                <button onClick={handelDelivered} className='px-4 py-2 leading-none text-white bg-[#ff634e] hover:text-white hover:bg-[#1b3e41] mt-4 w-full'>Delivered One</button>
                            </div>
                            <div className='border p-3  w-[100%] lg:w-[50%] md:w-[50%] shadow-lg'>
                                <form onSubmit={handelIncreaseQuantity}>
                                    <input className='w-full block border-2 p-1 border-[#ff634e]' type="number" name='quantity' required placeholder='Restock the Product' />
                                    <input className='w-full px-4 py-2 leading-none text-white bg-[#ff634e] hover:text-white hover:bg-[#1b3e41] mt-3' type="submit" value="Increase Quantity" />
                                </form>
                            </div>
                        </div>
                        <div>
                            <p>Supplier - {product.supplier}</p>
                            <p className='text-justify text-gray-500'> <span className='font-bold'>Description:</span> {product.description}</p>
                        </div>
                    </dir>
                </div>


            </div>
        </div>
    );
};

export default UpdateProductStock;