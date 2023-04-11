import React from 'react';
import './Job.css';
import { useNavigate } from 'react-router-dom';

const Job = ({ job }) => {
  const { id, company_logo, job_title, company_name, remote_onsite, time, location, salary } = job;
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/job/${id}`);
  };

  return (
    <div className='job'>
      <img src={company_logo} alt='' />
      <h3>{job_title}</h3>
      <p>{company_name}</p>
      <div>
        <p>{remote_onsite}</p>
        <p>{time}</p>
      </div>
      <div>
        <p>{location}</p>
        <p>{salary}</p>
      </div>
      <button className='btn' onClick={handleNavigate}>
        View Details
      </button>
    </div>
  );
};

export default Job;
