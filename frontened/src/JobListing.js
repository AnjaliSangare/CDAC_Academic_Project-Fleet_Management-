// JobListing.js
import React from 'react';
import './styles.css';

const JobListing = ({ title, description }) => {
  return (
    <div className="job">
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="apply-button">Apply Now</button>
    </div>
  );
};

export default JobListing;