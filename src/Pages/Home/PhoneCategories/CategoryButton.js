import React from 'react';
import { Link } from 'react-router-dom';

const CategoryButton = ({phonecategory}) => {
    const {category} = phonecategory;
    
    return (
        <Link to={`/usedphones/${category}`}>
            <button className='btn btn-outline btn-secondary w-full mb-4'>{category}</button>
        </Link>
    );
};

export default CategoryButton;