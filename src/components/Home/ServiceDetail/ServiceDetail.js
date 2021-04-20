import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

import BookingForm from '../../Appointment/BookingForm/BookingForm';

const ServiceDetail = ({service}) => {
  console.log(service)
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  console.log(loggedInUser)

//   const { register, handleClick, errors  } = useForm();
    const [modalIsOpen,setIsOpen] = useState(false);
    const handleClick = () => {
       const newBooking = { 
           email: loggedInUser.email,
           name: loggedInUser.displayName,
           service:service.name, 
           price:service.price, 
           orderTime: new Date() 
        }
        console.log(newBooking)


 fetch('http://localhost:5001/addBooking', {
     method: 'POST',
     headers: {'content-type': 'application/json'},
     body: JSON.stringify(newBooking)
 })
 .then(res => res.json())
 .then(success => {
     if(success){
        
        //  alert('Your request successfully')
         
         
     }
 })
    }
    // function openModal() {
    //   setIsOpen(true);
    // }
  
    function closeModal(){
      setIsOpen(false);
    }
    return (
        <div className="col-md-4 text-center">
            <img style={{height: '90px'}} src={`data:image/jpeg;base64,${service?.image.img}`} alt="" />
            <h5 className="mt-2 mb-2">{service.name}</h5>
            <h6>$ {service.price}</h6>
            <p className="text-secondary">{service.description}</p>
            <Link to={"/buy-product/" + service._id} onClick={handleClick} className="btn btn-primary">Explore more</Link>
            <BookingForm modalIsOpen={modalIsOpen} closeModal={closeModal} bookOn={service.name} booking={service.price}></BookingForm>
        </div>
    );
};

export default ServiceDetail;