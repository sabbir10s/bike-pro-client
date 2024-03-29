import React from 'react';
import useProducts from '../../Shared/Hooks/useProducts';
import Loading from '../../Shared/Loading/Loading';
import ProductsRow from './ProductsRow';

const MenageProducts = () => {
    const [products, setProducts, reload, setReload] = useProducts([]);
    return (
        <div className=''>
            <h1 className='text-xl font-medium text-left pt-5 pb-5 md:pt-0'>Menage All Products</h1>

            <div>
                {
                    products.length === 0 ? <Loading />
                        :
                        <div className="bg-base-100 rounded-t-lg p-5 flex justify-center">
                            <div>
                                {
                                    products.map((product, index) => <ProductsRow product={product} products={products} index={index} key={product._id} setProducts={setProducts} reload={reload} setReload={setReload} />)
                                }

                            </div>
                        </div>
                }
            </div>

        </div >
    );
};

export default MenageProducts;
