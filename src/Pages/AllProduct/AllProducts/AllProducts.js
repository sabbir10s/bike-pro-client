import React from 'react';
import { useState } from 'react';
import useProducts from '../../../Shared/Hooks/useProducts';
import Loading from '../../../Shared/Loading/Loading';
import ProductCart from '../ProductCart/ProductCart';

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

    if (products.length === 0) {
        return <Loading />
    }

    return (
        <div>
            <h1 className='text-xl font-medium text-left p-3 md:p-5'>All Products</h1>
            <div className='bg-base-100 rounded-lg p-5 md:mx-5 relative'>
                <input value={searchText} onChange={onChange} className='w-1/2 border border-primary py-1 pl-5 rounded-l-full' autoComplete='off' type="text" name='search' placeholder='search' />
                <button onClick={() => onSearch(searchText)} className='bg-primary px-4 py-1 border border-primary text-white rounded-r-full'>Search</button>
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
                        searchText ? result.map(product =>
                            <ProductCart product={product} key={product._id}></ProductCart>)
                            :
                            products.map(product =>
                                <ProductCart product={product} key={product._id}></ProductCart>)
                    }

                </div>
            </div>
        </div>
    );
};

export default AllProducts;