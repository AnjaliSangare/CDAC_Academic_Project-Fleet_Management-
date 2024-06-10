import React from 'react';

import JobListing from './JobListing';
import CultureSection from './CultureSection';
import BenefitsSection from './BenefitsSection';

import './styles.css';

const jobListings = [
  {
    title: 'Driver',
    description: 'We are looking for experienced drivers who can ensure safe and comfortable travel for our customers.',
  },
  {
    title: 'Customer Service Representative',
    description: 'Join our team to assist customers with reservations, inquiries, and provide exceptional service.',
  },
  // Add more job listings
];

export default function Career() {
  return (
   
      <div className="Career">
       

        <main>
          <section className="career-section">
            <h2>Job Openings</h2>
            <div className="job-list">
              {jobListings.map((job, index) => (
                <JobListing key={index} title={job.title} description={job.description} />
              ))}
            </div>
          </section>

          <CultureSection />
          <BenefitsSection />
        </main>

     
      </div>
   
  );
}

