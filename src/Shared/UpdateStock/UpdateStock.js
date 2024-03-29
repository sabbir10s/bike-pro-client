import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdArrowBackIosNew } from 'react-icons/md';
import { BsArrowRight } from 'react-icons/bs';
import DeliverProduct from './DeliverProduct';

const UpdateStock = () => {
    const { Id } = useParams();
    const [product, setProduct] = useState({});
    const [reload, setIsReload] = useState(true)
    useEffect(() => {
        fetch(`https://bike-pro-server.onrender.com/product/${Id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [Id, reload])

    const { product_name, picture, price, supplier, description } = product;
    const handelIncreaseQuantity = event => {
        event.preventDefault();
        const inputQuantity = event.target.quantity.value;
        const quantity = parseInt(inputQuantity) + product.quantity;
        fetch(`https://bike-pro-server.onrender.com/product/${Id}`, {
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
                toast.success('Product Added Successfully');
                setIsReload(!reload)
            })
    }

    return (
        <div className='bg-base-200'>
            <div className='w-full  md:h-screen flex items-start justify-center md:rounded-lg'>
                <div className='bg-base-100 md:rounded-lg p-5 md:m-5'>
                    <Link to='/products'><button className='border-2 border-primary text-primary hover:text-base-100 hover:bg-primary duration-300 px-5 py-2 rounded-full mb-5 flex items-center gap-1'><span><MdArrowBackIosNew /></span> <span>Go Back</span></button></Link>
                    <div className='grid gap-5 md:grid-cols-3 '>
                        <div className=' md:col-span-1 flex justify-center items-center border-2 rounded-lg border-primary'>
                            <img className='p-4' src={picture} alt="" />
                        </div>
                        <dir className='ml-[-35px] lg:ml-0 md:col-span-2'>
                            <p className='text-secondary font-bold mt-2 text-4xl'>{product_name}</p>
                            <p className='font-bold text-3xl my-2 text-primary'>${price}</p>
                            <div className='flex flex-col md:flex-row gap-4 my-5'>
                                <div className='border p-3 w-full shadow-lg'>
                                    <div><span className='text-gray-500'>Product Quantity-</span> <span className='text-primary font-bold text-xl'>{product.quantity}</span></div>
                                    <label htmlFor="my-modal-6" className='px-4 py-2 leading-none text-white bg-primary hover:text-white hover:bg-secondary mt-4 w-full flex justify-center items-center gap-1 cursor-pointer'><span>Deliver Product</span> <BsArrowRight /></label>
                                    <DeliverProduct product={product} setProduct={setProduct} reload={reload} setIsReload={setIsReload} Id={Id} />
                                </div>
                                <div className='border p-3 w-full  shadow-lg'>
                                    <form onSubmit={handelIncreaseQuantity}>
                                        <input className='w-full block border-2 p-1 border-primary' type="number" name='quantity' required placeholder='Restock the Product' />
                                        <input className='w-full px-4 py-2 leading-none text-white bg-primary hover:text-white hover:bg-secondary mt-3 cursor-pointer' type="submit" value="Increase Quantity" />
                                    </form>
                                </div>
                            </div>
                            <div>
                                <p>Supplier - {supplier}</p>
                                <p className='text-justify text-gray-500'> <span className='font-bold'>Description:</span> {description}</p>
                            </div>
                        </dir>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default UpdateStock;