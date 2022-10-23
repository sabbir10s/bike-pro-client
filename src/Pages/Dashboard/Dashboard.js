import React from 'react';
import { Outlet } from 'react-router-dom';
import CustomLink from '../../Shared/CustomLink/CustomLink';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <div className='bg-base-200 md:p-5'>
                    <Outlet />
                </div>
            </div>
            <div className="drawer-side">
                <label for="my-drawer" className="drawer-overlay text-slate-200"></label>
                <ul className="menu overflow-y-auto w-48 bg-base-100 text-base-content">
                    <span className='mt-14'><CustomLink to='/'>Home</CustomLink></span>
                    <span className='mt-4'><CustomLink to='/products'>Products</CustomLink></span>
                    <span className='mt-4'><CustomLink to='/menage'>Menage</CustomLink></span>
                    <span className='mt-4'><CustomLink to='/addProduct'>Add New</CustomLink></span>
                    <span className='mt-4'><CustomLink to='/myStock'>My Products</CustomLink></span>
                </ul>
            </div>
        </div >
    );
};

export default Dashboard;