import React from 'react';
import useProducts from '../../../Shared/Hooks/useProducts';
import Loading from '../../../Shared/Loading/Loading';
import ProductsRow from './ProductsRow';
const MenageProducts = () => {
    const [products, setProducts, reload, setReload] = useProducts([]);
    return (
        <div className=' container mx-auto'>
            <h1 className='text-xl font-medium text-left p-3 md:p-5'>Menage All Products</h1>

            <div>
                {
                    products.length === 0 ? <Loading></Loading>
                        :
                        <div className="overflow-x-auto w-full bg-base-100 rounded-t-lg p-3 md:mx-5 ">
                            <div className='py-3'>
                                <input className='border border-base-300 rounded px-2 py-1 w-full lg:w-1/3' type="text" placeholder='Search' />
                            </div>
                            <table className="table w-full">
                                <thead>
                                    <tr>
                                        <th className='text-black bg-base-200 rounded-t-none'>No</th>
                                        <th className='text-black bg-base-200 rounded-t-none'>Picture</th>
                                        <th className='text-black bg-base-200 rounded-t-none'>Details</th>
                                        <th className='text-black bg-base-200 rounded-t-none'>Update Product</th>
                                        <th className='text-black bg-base-200 rounded-t-none'>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        products.map((product, index) => <ProductsRow product={product} products={products} index={index} key={product._id} setProducts={setProducts} reload={reload} setReload={setReload} />)
                                    }
                                </tbody>


                                <tfoot>
                                    <tr>
                                        <th className='text-base-100 bg-base-300'>No</th>
                                        <th className='text-base-100 bg-base-300'>Picture</th>
                                        <th className='text-base-100 bg-base-300'>Details</th>
                                        <th className='text-base-100 bg-base-300'>Update Product</th>
                                        <th className='text-base-100 bg-base-300'>Delete</th>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                }
            </div>

        </div >
    );
};

export default MenageProducts;