import React from 'react';
import { Link } from 'react-router-dom';

const CategoryButton = ({category}) => {
    // const {category: singleCategory} = category

    // const {data: categories = [], isLoading, refetch} = useQuery({
    //     queryKey: ['categories'],
    //     queryFn: async() => {
    //         const res = await fetch(`http://localhost:5000/usedphones/${category}`);
    //         const data = await res.json()
    //         return data
    //     }
    // })


    // to={`/usedphones/${singleCategory.category}`}
    return (
        <Link to={`/usedphones/${category.category}`}>
            <button className='btn btn-secondary w-full mb-3 shadow-xl'>{category.category}</button>
        </Link>
    );
};

export default CategoryButton;