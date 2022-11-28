import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
        <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
            <Outlet></Outlet>
        </div> 
        <div className="drawer-side">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {/* for buyer:  */}
            <li><Link to='/dashboard' className='btn btn-outline btn-secondary mb-2'>My orders</Link></li>

            {/* for seller:  */}
            <li><Link to='/dashboard/addproduct' className='btn btn-outline btn-secondary mb-2'>Add Product</Link></li>
            <li><Link to='/dashboard/myproducts' className='btn btn-outline btn-secondary mb-2'>My Products</Link></li>

            {/* for Admin  */}
            <li><Link to='/dashboard/addproduct' className='btn btn-outline btn-secondary mb-2' disabled>All users</Link></li>
            <li><Link to='/dashboard/addproduct' className='btn btn-outline btn-secondary mb-2' disabled>Reported</Link></li>
        </ul>

        </div>
        </div>
        </div>
    );
};

export default DashboardLayout;