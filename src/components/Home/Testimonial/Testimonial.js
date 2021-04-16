import React from 'react';

const Testimonial = (props) => {
   
    const {cleaner, img, title, description} = props.testimonial
    return (
        
        <div className="card-shadow-sm col-md-4">
             <div className="card-header d-flex align-items-center">
                 <img className="mx-3" src={img} alt="" width="600" height="250"/>
             </div>
             <div className="card-body text-center text-secondary mt-3">
                    <h3 className="text-uppercase">{title}</h3>
                    <p>{description}</p>
             </div>
        </div>
    );
};

export default Testimonial;