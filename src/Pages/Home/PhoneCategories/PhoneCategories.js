import { useQuery } from '@tanstack/react-query';
import React from 'react';
import CategoryButton from './CategoryButton';

const PhoneCategories = () => {

    const {data: categories = []} = useQuery({
        queryKey: ['categories'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/usedphones');
            const data = await res.json()
            return data
        }
    })

    return (
        <div >
            <div className='px-3'>
                {
                    categories.map(category => <CategoryButton
                    key={category._id}
                    phonecategory={category}
                    ></CategoryButton>)
                }
            </div>
        </div>
    );
};

export default PhoneCategories;