import React from 'react';
import { useState } from 'react';
import ProductCart from './ProductCart';
import './All Products.css'
import useProducts from '../../Shared/Hooks/useProducts';
import Loading from '../../Shared/Loading/Loading';

const AllProducts = () => {
    const [products] = useProducts([]);
    const [searchText, setSearchText] = useState("")
    const [result, setResult] = useState([])

    const onChange = (event) => {
        event.preventDefault()
        setSearchText(event.target.value)

    }

    const onSearch = (searchTerm) => {
        const searchResult = products.filter((product) => product.product_name === searchTerm)
        setResult(searchResult);
        setSearchText(searchTerm);

    }
    const [quantity, setQuantity] = useState(500);

    // Triggered when the value gets updated while scrolling the slider:
    const handleInput = (e) => {
        setQuantity(e.target.value);
    }

    console.log(products);
    if (products.length === 0) {
        return <Loading />
    }

    return (
        <div>
            <h1 className='text-xl font-medium text-left pt-5 pb-5 md:pt-0'>All Products</h1>
            <div className='bg-base-100 rounded-lg p-5 relative'>
                <div className='grid md:grid-cols-2 gap-10 items-center'>
                    <input value={searchText} onChange={onChange} className='w-full border border-primary py-1 pl-5 rounded-full' autoComplete='off' type="text" name='search' placeholder='Search' />

                    <div>
                        <input className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider' type="range" onInput={handleInput} min="0" max="1000" defaultValue={quantity} />
                        <h1>Available quantity less then: <span className='text-primary font-bold'>{quantity}</span></h1>
                    </div>
                </div>
                <div className='absolute flex flex-col bg-base-100 w-1/2 shadow-xl px-5'>
                    {
                        products.filter(item => {
                            const searchTerm = searchText.toLowerCase();
                            const name = item.product_name.toLowerCase();
                            return searchTerm && name.startsWith(searchTerm) && name !== searchTerm
                        }).slice(0, 10)

                            .map(product => <div className=' cursor-pointer py-2 ' key={product._id} onClick={() => onSearch(product.product_name)}>
                                {product.product_name}
                            </div>)
                    }
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center justify-items-center container mx-auto mt-10'>
                    {
                        searchText.length > 4 ? result.map(product =>
                            <ProductCart product={product} key={product._id}></ProductCart>)
                            :
                            products.filter(product => { return product.quantity < parseInt(quantity, 10) }).map(product =>
                                <ProductCart product={product} key={product._id}></ProductCart>)
                    }

                </div>
            </div>
        </div>
    );
};

export default AllProducts;