import React from 'react';
import { Link } from 'react-router-dom';

const CategoryButton = ({phonecategory}) => {
    const {category} = phonecategory;
    // console.log(category);
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
        <Link to={`/usedphones/${category}`}>
            <button className='btn btn-outline btn-secondary w-full mb-4'>{category}</button>
        </Link>
    );
};

export default CategoryButton;