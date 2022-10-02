import { useEffect, useState } from 'react';

const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [reload, setReload] = useState(true)
    useEffect(() => {
        fetch('https://bike-pro-server.onrender.com/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [reload])


    return [products, setProducts, reload, setReload];
};

export default useProducts;