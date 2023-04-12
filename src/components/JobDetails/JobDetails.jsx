import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import './JobDetails.css'

const JobDetails = () => {
  const { id } = useParams();
  const jobs = useLoaderData();
  console.log(jobs);
  return (
    <div>
        <h2>Job Details</h2>
        <div>
            <p><span className='bold'>Job Description: </span>{jobs.job_description}</p>
            <p><span className='bold'>Job Responsibility: </span>{jobs.job_responsibility}</p>
            <p className='bold'>Educational Requirements:</p>
            <p>Bachelor degree to complete any reputational university</p>
            <p className='bold'>Experiences:</p>
            <p>2-3 years in this field</p>
        </div>
    </div>
  );
};

export default JobDetails;




