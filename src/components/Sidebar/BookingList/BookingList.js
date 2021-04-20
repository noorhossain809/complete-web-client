import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar';
import BookingCard from './BookingCard/BookingCard';

const BookingList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    
    const [bookings, setBookings] = useState([])
   

        useEffect( () => {
            fetch('https://sleepy-atoll-80753.herokuapp.com/bookings', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({email:loggedInUser.email})
        })
        .then(res => res.json())
        .then(data => setBookings(data))
        }, [])

    return (
        <div className="row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
                <div className="card-deck row col-md-8">
                    <h1>Bookings: {bookings.length}</h1>
                    {
                        bookings.map(booking => <BookingCard booking={booking}></BookingCard>)
                    }
                </div>
        </div>
    );
};

export default BookingList;