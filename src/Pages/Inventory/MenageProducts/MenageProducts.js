import React from 'react';
import useProducts from '../../../Shared/Hooks/useProducts';
import Loading from '../../../Shared/Loading/Loading';
import ProductsRow from './ProductsRow';
const MenageProducts = () => {
    const [products, setProducts, reload, setReload] = useProducts([]);
    return (
        <div className=' container mx-auto'>
            <h1 className=' rounded text-center text-3xl text-[#ff634e] font-medium my-5 '>Menage All Products</h1>

            <div>
                {
                    products.length === 0 ? <Loading></Loading>
                        :

                        <div className="overflow-x-auto w-full">
                            <table className="table w-full">
                                <thead>
                                    <tr>
                                        <th className='text-base-100 bg-primary'>No</th>
                                        <th className='text-base-100 bg-primary'>Picture</th>
                                        <th className='text-base-100 bg-primary'>Details</th>
                                        <th className='text-base-100 bg-primary'>Update Product</th>
                                        <th className='text-base-100 bg-primary'>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        products.map((product, index) => <ProductsRow product={product} products={products} index={index} key={product._id} setProducts={setProducts} reload={reload} setReload={setReload} />)
                                    }
                                </tbody>


                                <tfoot>
                                    <tr>
                                        <th className='text-base-100 bg-primary'>No</th>
                                        <th className='text-base-100 bg-primary'>Picture</th>
                                        <th className='text-base-100 bg-primary'>Details</th>
                                        <th className='text-base-100 bg-primary'>Update Product</th>
                                        <th className='text-base-100 bg-primary'>Delete</th>
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