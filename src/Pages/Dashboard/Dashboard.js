import React from 'react';
import { Outlet } from 'react-router-dom';
import CustomLink from '../../Shared/CustomLink/CustomLink';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile bg-secondary h-screen">
            <input id="my-drawer" type="checkbox" class="drawer-toggle" />

            <div class="drawer-content mt-5 mr-10 rounded-t-lg bg-base-100 h-screen">
                <div className=' p-5'>
                    <Outlet />
                </div>
            </div>
            <div class="drawer-side mt-5 ml-10 mr-5 rounded-t-lg">
                <label for="my-drawer" class="drawer-overlay text-slate-200"></label>
                <ul class="menu p-4 overflow-y-auto w-52 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <span className='mt-3'><CustomLink to='/dashboard'>Menage All</CustomLink></span>
                    <span className='mt-3'><CustomLink to='/dashboard/addProduct'>Add New</CustomLink></span>
                    <span className='mt-3'><CustomLink to='/dashboard/myProduct'>My Products</CustomLink></span>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;