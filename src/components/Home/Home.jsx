import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Category from '../Category/Category';
import './Home.css';
import Job from '../Job/Job';
import heroImg from '../../assets/All Images/P3OLGJ1 copy 1.png'

const Home = () => {
  const { category, jobs } = useLoaderData();
  const [showAllJobs, setShowAllJobs] = useState(false);
  const initialJobCount = 4;

  const toggleShowAllJobs = () => {
    setShowAllJobs(!showAllJobs);
  };

  return (
    <div className='home-container'>
      <div className='banner'>
        <div className='banner-left'>
          <h1 className='title'>One Step</h1>
          <h1 className='title'>Closer To Your</h1>
          <h1 className='span title'>Dream Job</h1>
          <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
          <button className='btn'>Get Started</button>
        </div>
        <div className='banner-right'>
          <img src={heroImg} alt="" />
        </div>
      </div>
      <div className='category'>
          <h2>Job Category List</h2>
          <small>Explore thousands of job opportunities with all the information you need. Its your future</small>
      </div>
      <div className='category-container'>
        {category.map((categories) => (
          <Category key={categories.id} categories={categories} />
        ))}
      </div>
      <div className='featured-job'>
        <h2>Featured Jobs</h2>
        <small>Explore thousands of job opportunities with all the information you need. Its your future</small>
      </div>
      <div className='job-container'>
        {jobs.slice(0, showAllJobs ? jobs.length : initialJobCount).map((job) => (
          <Job key={job.id} job={job} />
        ))}
      </div>
      {!showAllJobs && (
        <button className='btn see-all' onClick={toggleShowAllJobs}>
          See all jobs
        </button>
      )}
    </div>
  );
};

export default Home;
