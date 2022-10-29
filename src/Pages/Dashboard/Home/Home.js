import React from 'react';
import useProducts from '../../../Shared/Hooks/useProducts';
import { BsBagCheck, BsArrowRight } from 'react-icons/bs';
import { GoGraph } from 'react-icons/go';
import { IoIosSend } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import Loading from '../../../Shared/Loading/Loading';
import { PieChart, Pie, Tooltip, Cell } from "recharts";

const Home = () => {
    const [products] = useProducts([])
    const [deliver, setDeliver] = useState([])
    useEffect(() => {
        fetch('https://bike-pro-server.onrender.com/deliver')
            .then(res => res.json())
            .then(data => setDeliver(data))
    }, [])

    const productQuantity = products.map((p) => p.quantity)
    const deliverQuantity = deliver.map((d) => d.quantity)

    const itemsQuantity = (item) => {
        let totalQuantity = 0;
        let i = 0;
        while (i < item.length) {
            const element = item[i];
            i++;
            totalQuantity = totalQuantity + element;
        }
        return totalQuantity
    }

    const items = []
    const name = products.map(({ product_name, quantity }) => items.push({ name: product_name, value: quantity }))
    console.log(deliver);

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#131a4f', '#4461F2', '#82CD47', '#9A1663', '#EB1AFFF', '#425F57'];

    if (products.length === 0) {
        return <Loading />
    }

    return (
        <div className='pt-5 pb-5 md:pt-0 h-[90vh]'>
            <div className='bg-base-100 p-5 rounded-lg'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-10'>
                    <div className='bg-secondary w-full rounded'>
                        <div className='grid grid-cols-3  p-5 '>
                            <div className='col-span-2'>
                                <h2 className='text-4xl font-bold text-white'>{products.length}</h2>
                                <p className='text-white text-sm mt-3'>Items Product</p>
                            </div>
                            <div>
                                <BsBagCheck className='text-base-100/20 text-8xl font-bold' />
                            </div>
                        </div>
                        <Link to='/addProduct'><div className='bg-primary/10 hover:bg-primary/40 duration-300 text-white text-center flex items-center justify-center gap-1 py-1 rounded-b'> <span>Add New Product</span> <BsArrowRight className='text-2xl' /> </div>  </Link>
                    </div>
                    <div className='bg-primary w-full rounded'>
                        <div className='grid grid-cols-3  p-5 '>
                            <div className='col-span-2'>
                                <h2 className='text-4xl font-bold text-white'>{itemsQuantity(productQuantity)}</h2>
                                <p className='text-white text-sm mt-3'>Available Stock</p>
                            </div>
                            <div>
                                <GoGraph className='text-base-200/30 text-8xl font-bold' />
                            </div>
                        </div>
                        <Link to='/products'><div className='bg-secondary/20 hover:bg-secondary/40 duration-300 text-white  text-center py-1 flex items-center justify-center gap-1 rounded-b'> <span>Update Stock</span> <BsArrowRight className='text-2xl' /> </div>  </Link>
                    </div>
                    <div className='bg-base-300 w-full rounded'>
                        <div className='grid grid-cols-3  p-5 '>
                            <div className='col-span-2'>
                                <h2 className='text-4xl font-bold text-white'>{itemsQuantity(deliverQuantity)}</h2>
                                <p className='text-white text-sm mt-3'>Delivered Products</p>
                            </div>
                            <div>
                                <IoIosSend className='text-base-100/30 text-8xl font-bold' />
                            </div>
                        </div>
                        <Link to='/'><div className='bg-secondary/20 hover:bg-secondary/40 duration-300 text-white  text-center py-1 flex items-center justify-center gap-1 rounded-b'> <span>More Details</span> <BsArrowRight className='text-2xl' /> </div>  </Link>
                    </div>
                </div>
            </div>

            <div className='mt-5 grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <div className='bg-base-100 p-5 rounded-lg'>
                    <div className='flex justify-between'>
                        <h3>New Products</h3>
                        <Link to="/products" className='text-primary'>See all</Link>
                    </div>
                    <div className='mt-5 grid grid-cols-1 md:grid-cols-2 gap-2'>
                        {
                            products.slice(0, 2).map(product => <div className='border p-3 rounded shadow-sm'>
                                <img className='w-[150px]' src={product.picture} alt="" />
                                <div className='mt-2'>
                                    <h2 className='text-lg text-primary'>{product.product_name}</h2>
                                    <p>Quantity: {product.quantity}</p>
                                    <p>price: {product.price}</p>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
                <div className='bg-base-100 p-5 rounded-lg'>
                    <h3>Product Stock Graph</h3>
                    <div className='flex justify-center items-center'>
                        <PieChart width={250} height={250}>
                            <Pie
                                data={items}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={80}
                                fill="#8884d8"
                                paddingAngle={5}
                                dataKey="value"
                                label
                            >
                                {items.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;