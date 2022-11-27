import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import ButtonCommon from '../../../Components/ButtonCommon/ButtonCommon';
import { AuthContext } from '../../../Context/AuthProvider';

const Navbar = () => {
  const {singOut, user} = useContext(AuthContext);
  const handleLogout = () => {
    singOut()
    .then(() => {})
    .catch(err => console.error(err))
  };
    // menu items for show in header 
    const menuItem = <>
        <li><NavLink className="rounded-xl" to='/'>Home</NavLink></li>
        <li><NavLink className="rounded-xl" to='/blog'>Blog</NavLink></li>
        {
          user?.uid ?
          <>
            <li><NavLink className="rounded-xl" to='/dashboard'>Dashboard</NavLink></li>
            <li><button onClick={handleLogout}>Sign Out</button></li> 
          </>
          :
          <li><Link to='/login'>Login</Link></li>
        }
    </>

    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {menuItem}
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost normal-case text-xl">Puran Bazar</Link>
  </div>
  <div className="navbar-end">
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
            {menuItem}
    </ul>
  </div>
    <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
  </div>
</div>
    );
};

export default Navbar;