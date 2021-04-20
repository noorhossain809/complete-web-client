import React, { useEffect, useState } from 'react';
 import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css'



const Testimonials = () => {
    const [testimonialData, setTestimonialData] = useState([])
    useEffect( () => {
        fetch('http://localhost:5001/testimonial')
        .then(res => res.json())
        .then(data => setTestimonialData(data))
    }, [])
    return (
        
        <section className="blogs">
            <div className="container">
                <div className="section-header text-center">
                    <h1 style={{fontWeight:'400', color:'#5FC7C7'}} className="text-uppercase">Testimonial</h1>
                    <h5>We Clean Everything</h5>
                    <h1><span style={{fontWeight:'300'}}>Always the</span> <span style={{fontWeight:'600'}}>Best Service</span></h1>
                </div>
                <div className="card-deck row mt-5">
                    {
                        testimonialData.map(testimonial => <Testimonial testimonial={testimonial}></Testimonial>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;