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
      <div className='details-container'>
        <div className='details-right'>
          <p><span className='bold'>Job Description: </span>{jobs.job_description}</p>
          <p><span className='bold'>Job Responsibility: </span>{jobs.job_responsibility}</p>
          <p className='bold'>Educational Requirements:</p>
          <p>{jobs.requirements}</p>
          <p className='bold'>Experiences:</p>
          <p>{jobs.experiences}</p>
        </div>
        <div className='details-left'>
          <div className='left'>
            <h3>Job Details</h3>
            <hr />
            <p><span className='bold'>Salary: </span>{jobs.salary}</p>
            <p><span className='bold'>Job Title: </span>Product Designer</p>
            <h3>Contact Information</h3>
            <hr />
            <p><span className='bold'>Phone:</span>01720- 00 00 00</p>
            <p><span className='bold'>Email: </span>{jobs.contact_info}</p>
            <p>Dhaka, Bangladesh</p>
          </div>
          <div>
            <button className='btn btn-d'>Apply Now</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default JobDetails;




