import React from 'react';
import './BookingCard.css'

const BookingCard = ({booking}) => {
    return (
        <div style={{border:'1px solid gray', marginLeft:'20px'}} className="card col-md-6 p-5">
            <div className="container ">
                <h4>Name: {booking.name}</h4>
                <h5>Email: {booking.email}</h5>
                <h6>Service: {booking.service}</h6>

            </div>
        </div>
    );
};

export default BookingCard;