import React from 'react';

import ServiceCard from './ServiceCard';
import WhyChooseUs from './WhyChooseUs';

import './styles.css';

const services = [
  {
    title: 'what are the car rental service?',
    description: <h5>Airport Transfers - You no longer have to deal with long lines for taxis at the airport or worry about missing your flight because our car rental service allows you to easily reserve transportation to and from  International Airports or anywhere else in the city.</h5>,
},
  {
    title: 'Why IndiaDrive Car Rentals?',
    description: <h5>Privacy and Independence: With a self-drive car, you have complete privacy and the freedom to travel at your own pace without a driver's presence. This is particularly advantageous for individuals and groups who value privacy during their journey.</h5>},
  <h5>Cost Savings: Self-drive rentals can be cost-effective, especially for longer trips or if you're traveling with a group. You don't have to pay for a driver's services, and you can split the rental cost among passengers.</h5>
 ,
];

const ServicePage = () => {
  return (
    <div className="service-page">
     
      
      <section className="services">
        {services.map((service, index) => (
          <ServiceCard key={index} title={service.title} description={service.description} />
        ))}
      </section>
      
      <WhyChooseUs />
   
    </div>
  );
};

export default ServicePage;