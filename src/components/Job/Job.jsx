import React from 'react';
import './Job.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faDollarSign } from '@fortawesome/free-solid-svg-icons';



const Job = ({ job }) => {
  const { id, company_logo, job_title, company_name, remote_onsite, time, location, salary } = job;
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/job/${id}`);
  };

  return (
    <div className='job'>
      <img src={company_logo} alt='' />
      <h3 className='title'>{job_title}</h3>
      <p className='name'>{company_name}</p>
      <div className='time'>
        <p className='j-t'>{remote_onsite}</p>
        <p className='j-t'>{time}</p>
      </div>
      <div className='location'>
        <p className='j-l'><FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: '#CCCCCC', fontSize: '18px' }} className='icon' />{location}</p>
        <p className='j-l'>
          <FontAwesomeIcon icon={faDollarSign} style={{ color: '#CCCCCC', fontSize: '18px' }} className='icon' />
          {salary}
        </p>
      </div>
      <button className='btn' onClick={handleNavigate}>
        View Details
      </button>
    </div>
  );
};

export default Job;
