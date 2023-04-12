import React from 'react';
import './Cateogry.css'
const Category = ({categories}) => {
    const {category_logo, category_name, jobs_available} = categories
    return (
        <div className='category-card'>
            <img src={category_logo}alt="" className='cat-img' />
            <h3 className='cat-name'>{category_name}</h3>
            <p>{jobs_available}</p>
        </div>
    );
};

export default Category;