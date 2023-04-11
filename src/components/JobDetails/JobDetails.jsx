import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Banner from '../Banner/Banner';

const JobDetails = () => {
  const { id } = useParams();
  const jobs = useLoaderData();
  const { job_description } = jobs;

  return (
    <div>
        <h2>Job Details</h2>
        <div>
            <p>{job_description}</p>
        </div>
    </div>
  );
};

export default JobDetails;
