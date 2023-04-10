import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const category = useLoaderData();
    return (
        <div>
            <h2>This is my home: {category.length}</h2>
        </div>
    );
};

export default Home;