// import React from 'react';
// import { useLoaderData } from 'react-router-dom';
// import Category from '../Category/Category';
// import './Home.css'
// import Job from '../Job/Job'

// const Home = () => {
//     const {category, jobs} = useLoaderData();
//     return (
//         <div className='home-container'>
//             <div className='category-container'>
//             {
//                 category.map(categories => <Category 
//                     key = {categories.id}
//                     categories  = {categories}
//                 ></Category>)
//             }
//             </div>
//             <div className='job-container'>
//                 {
//                     jobs.map(job =>
//                         <Job
//                         key = {job.id}
//                         job = {job}
//                         ></Job>) 
//                 }
//             </div>
//             <button>See all jobs</button>

//         </div>
//     );
// };

// export default Home;





import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Category from '../Category/Category';
import './Home.css';
import Job from '../Job/Job';

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
                    <h1>One Step Closer To Your <span>Dream Job</span></h1>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='btn'>Get Started</button>
                </div>
                <div className='banner-right'>
                    <img src="/src/assets/All Images/P3OLGJ1 copy 1.png" alt="" />
                </div>
            </div>
      <div className='category-container'>
        {category.map((categories) => (
          <Category key={categories.id} categories={categories} />
        ))}
      </div>
      <div className='job-container'>
        {jobs.slice(0, showAllJobs ? jobs.length : initialJobCount).map((job) => (
          <Job key={job.id} job={job} />
        ))}
      </div>
      {!showAllJobs && (
        <button className='btn' onClick={toggleShowAllJobs}>
          See all jobs
        </button>
      )}
    </div>
  );
};

export default Home;
