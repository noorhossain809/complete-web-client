import React from 'react';
import laundry from '../../../images/household (1).png';
import cleaning from '../../../images/cleaning (1).png';
import suit from '../../../images/housewash.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';


const serviceData = [
    {
        name: 'WE PICK YOUR CLOTHES',
        price: '130',
        img: laundry,
        description: 'The automated process starts as soon as your clothes go into the machine. The outcome is gleaming clothes!'
    },
    {
        name: 'DELIVERY AT THE DOORSTEP!',
        price: '150',
        img: cleaning,
        description: 'We ensure delivery in the quickest of the turnaround time in the industry. Superior quality of service with speed!'
    },
    {
        name: 'QUICKER DELIVERY',
        price: '200',
        img: suit,
        description: 'We have pioneered the concept of pickup and delivery in the shortest possible time. We intend keeping it that way!'
    },
]

const Services = () => {
    return (
        <section>
            <div className="text-center">
                <h5>Our Services</h5>
                <h1><span style={{fontWeight:'400'}}>This is</span> <span style={{fontWeight:'620'}}>How we Work</span></h1>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5 mb-5">
                       {
                           serviceData.map(service => <ServiceDetail service={service}></ServiceDetail>)
                       }
                </div>
                
            </div>
        </section>
    );
};

export default Services;