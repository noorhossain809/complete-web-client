import React, { useEffect, useState } from 'react';


const ServiceManageCard = () => {
    const [serviceData, setServiceData] = useState([])

    const deleteEvent = id => {
        fetch(`https://sleepy-atoll-80753.herokuapp.com/deleteEvent/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            console.log( result,'deleted successfully')
        })
   }

    useEffect(() => {
        fetch('https://sleepy-atoll-80753.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServiceData(data))
    }, [])
    return (
        <section>

            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5 mb-5">

                    <table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Service Name</th>
                                <th>Service Fee</th>

                                <th>Action</th>
                            </tr>
                        </thead>
                        {serviceData.map((manageService) => (
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>{manageService.name}</td>
                                    <td>{manageService.price}</td>


                                    <td>
                                        <button onClick={() => deleteEvent(book._id)}>delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        ))}
                    </table>

                </div>

            </div>
        </section>
    );
};

export default ServiceManageCard;