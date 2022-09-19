import React from 'react';
import Banner from '../Banner/Banner';
import Supplier from '../Suppliers/Supplier';
import Brands from '../Brands/Brands';
import Footer from '../../../Shared/Footer/Footer';
import Products from '../Products/Products';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products />
            <Supplier />
            <Brands />
            <Footer />
        </div>
    );
};

export default Home;