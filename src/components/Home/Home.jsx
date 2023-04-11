import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Category from '../Category/Category';
import Job from '../Job/Job';
import './Home.css'

const Home = () => {
    const {category, jobs} = useLoaderData();
    
    return (
        <div className='home-container'>
            <div className='category-container'>
            {
                category.map(categories => <Category 
                    key = {categories.id}
                    categories  = {categories}
                ></Category>)
            }
            </div>
            <div className='job-container'>
                {
                    jobs.map(job =>
                        <Job
                        key = {job.id}
                        job = {job}
                        ></Job>) 
                }
            </div>
        </div>
    );
};

export default Home;