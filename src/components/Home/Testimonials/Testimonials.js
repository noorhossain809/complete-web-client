import React from 'react';

 import Testimonial from '../Testimonial/Testimonial';
import apron from '../../../images/image/alex-simpson-hC8c4K_Ckfs-unsplash.jpg';
import cleaningStuff from '../../../images/image/cdc-F98Mv9O6LfI-unsplash.jpg';
import cleanerStuff from '../../../images/image/jeshoots-com-__ZMnefoI3k-unsplash.jpg'

import './Testimonials.css'


const testimonialData = [
    {
        title : 'Cleaning House',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        cleaner:'Dr. Cudi',
        img : apron,
        date : '23 April 2019'
    },
    {
        title : 'Cleaning Kitchen',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        cleaner:'Dr. Sinthia',
        img : cleaningStuff,
        date : '23 April 2019'
    },
    {
        title : 'Cleaning Wash',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        cleaner:'Dr. Cudi',
        img : cleanerStuff,
        date : '23 April 2019'
    },
]


const Testimonials = () => {
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