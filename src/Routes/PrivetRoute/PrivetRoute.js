import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const PrivetRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation()
    
    if(loading){
        return <div className='flex justify-center items-center h-[100vh]'>
            <div className="flex items-center justify-center space-x-2">
	        <div className="w-4 h-4 rounded-full animate-pulse bg-emerald-600"></div>
	        <div className="w-4 h-4 rounded-full animate-pulse bg-emerald-600"></div>
	        <div className="w-4 h-4 rounded-full animate-pulse bg-emerald-600"></div>
            </div>
        </div>
    }

    if(user){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>;
};

export default PrivetRoute;