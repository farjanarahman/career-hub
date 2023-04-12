import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {
  const { id } = useParams();
  const jobs = useLoaderData();
  console.log(jobs);
  return (
    <div>
        <h2>Job Details</h2>
        <div>
            <p>{jobs.job_description}</p>
            <p>{jobs.job_responsibility}</p>
        </div>
    </div>
  );
};

export default JobDetails;




