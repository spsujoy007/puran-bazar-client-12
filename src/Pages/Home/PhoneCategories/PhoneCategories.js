import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const PhoneCategories = () => {

    // const {data: categories = []} = useQuery({
    //     queryKey: ['categories'],
    //     queryFn: async() => {
    //         const res = await fetch('https://puran-bazar-server-ten.vercel.app/usedphones');
    //         const data = await res.json()
    //         return data
    //     }
    // })

    return (
        <div >
            <div className='px-3'>
            <Link to={`/usedphones/Apple`}>
                <button className='btn btn-outline btn-secondary w-full mb-4'>Apple</button>
            </Link>
            <Link to={`/usedphones/Redmi`}>
                <button className='btn btn-outline btn-secondary w-full mb-4'>Redmi</button>
            </Link>
            <Link to={`/usedphones/Samsung`}>
                <button className='btn btn-outline btn-secondary w-full mb-4'>Samsung</button>
            </Link>
            <Link to={`/usedphones/Vivo`}>
                <button className='btn btn-outline btn-secondary w-full mb-4'>Vivo</button>
            </Link>
            </div>
        </div>
    );
};

export default PhoneCategories;