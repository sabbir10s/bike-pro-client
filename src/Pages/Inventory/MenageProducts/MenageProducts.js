import React from 'react';
import useProducts from '../../../Shared/Hooks/useProducts';
import Loading from '../../../Shared/Loading/Loading';
import ProductsRow from './ProductsRow';
const MenageProducts = () => {
    const [products, setProducts] = useProducts([]);

    return (
        <div className='bg-base-100 p-5 rounded-xl'>
            <h1 className=' rounded text-center text-3xl text-[#ff634e] font-medium mb-5 '>Menage All Products</h1>

            <div>
                {
                    products.length === 0 ? <Loading></Loading>
                        :

                        <div class="overflow-x-auto w-full">
                            <table class="table w-full">
                                <thead>
                                    <tr>
                                        <th className='text-base-100 bg-primary'>No</th>
                                        <th className='text-base-100 bg-primary'>Picture</th>
                                        <th className='text-base-100 bg-primary'>Details</th>
                                        <th className='text-base-100 bg-primary'>Delete</th>
                                        <th className='text-base-100 bg-primary'>Update</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        products.map((product, index) => <ProductsRow product={product} products={products} index={index} key={product._id} setProducts={setProducts} />)
                                    }
                                </tbody>


                                <tfoot>
                                    <tr>
                                        <th className='text-base-100 bg-primary'>No</th>
                                        <th className='text-base-100 bg-primary'>Picture</th>
                                        <th className='text-base-100 bg-primary'>Details</th>
                                        <th className='text-base-100 bg-primary'>Delete</th>
                                        <th className='text-base-100 bg-primary'>Stock Update</th>
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