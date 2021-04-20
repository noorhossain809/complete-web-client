import React from 'react';

const Testimonial = ({testimonial}) => {
   
    
    return (
        
        <div className="card-shadow-sm col-md-4">
             <div className="card-header d-flex align-items-center">
                 <img className="mx-3" src={`data:image/jpeg;base64,${testimonial?.image.img}`} alt="" width="600" height="250"/>
             </div>
             <div className="card-body text-center text-secondary mt-3">
                    <h3 className="text-uppercase">{testimonial.name}</h3>
                    <p>{testimonial.description}</p>
             </div>
        </div>
    );
};

export default Testimonial;