import React from 'react';

const ServiceDetail = ({service}) => {
    return (
        <div className="col-md-4 text-center">
            <img style={{width:'90px'}} src={service.img} alt="" />
            <h5 className="mt-2 mb-2">{service.name}</h5>
            <h6>$ {service.price}</h6>
            <p className="text-secondary">{service.description}</p>
            <button className="btn btn-primary">Explore more</button>
        </div>
    );
};

export default ServiceDetail;