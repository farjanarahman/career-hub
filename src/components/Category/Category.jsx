import React from 'react';

const Category = ({categories}) => {
    const {category_logo, category_name, jobs_available} = categories
    return (
        <div>
            <img src={category_logo}alt="" />
            <h3>{category_name}</h3>
            <p>{jobs_available}</p>
        </div>
    );
};

export default Category;