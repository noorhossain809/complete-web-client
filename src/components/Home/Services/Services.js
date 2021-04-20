import React, { useEffect, useState } from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';




const Services = () => {
    const [serviceData, setServiceData] = useState([])
    useEffect( () => {
        fetch('http://localhost:5001/services')
        .then(res => res.json())
        .then(data => setServiceData(data))
    }, [])
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