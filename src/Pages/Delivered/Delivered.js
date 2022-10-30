import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Loading from '../../Shared/Loading/Loading';

const Delivered = () => {
    const [deliver, setDeliver] = useState([])
    useEffect(() => {
        fetch('https://bike-pro-server.onrender.com/deliver')
            .then(res => res.json())
            .then(data => setDeliver(data))
    }, [])

    if (deliver.length === 0) {
        return <Loading />
    }
    return (
        <div className='bg-base-100 rounded-lg p-5 h-[85vh] overflow-x-auto '>
            <table className="table w-full">
                <tr className='p-0'>
                    <th className='p-0'></th>
                    <th className='p-0'>Client Name</th>
                    <th className='p-0'>Product Name</th>
                    <th className='p-0'>Quantity</th>
                    <th className='p-0'>Address</th>
                </tr>
                {
                    deliver.map(({ clientName, email, address, product_name, deliveredQuantity }, index) => <tr className='pb-0' key={index}>
                        <td className='p-0'>{index + 1}</td>
                        <td className='p-0'>{clientName}</td>
                        <td className='p-0'>{product_name}</td>
                        <td className='p-0'>{deliveredQuantity}</td>
                        <td className='flex flex-col text-sm p-0'>
                            <td className='p-0'>{email}</td>
                            <td className='p-0'>{address}</td>
                        </td>
                    </tr>)
                }
            </table>
        </div>
    );
};

export default Delivered;