import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../../../App';
import ProcessPayment from '../../../ProcessPayment/ProcessPayment';
import Sidebar from '../../../Sidebar/Sidebar';


const Book = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { id } = useParams();
    console.log(id)
    const [selected, setSelected] = useState([]);

    // const handlePaymentSuccess = paymentId => {
    //     useEffect(() => {
    //         fetch(`http://localhost:5001/service/${id}`,{

    //         })
    //             .then(res => res.json())
    //             .then(data => setSelected(data))
    //     }, [id]);
    // }

    useEffect(() => {
        fetch(`http://localhost:5001/service/${id}`)
            .then(res => res.json())
            .then(data => setSelected(data))
    }, [id]);
    return (
        <div className="container-fluid d-flex">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-6 p-5">
            <table className="table ms-auto ">
                <thead>
                    <tr>

                        <th>Name</th>
                        <th>Price</th>
                        <th>Email</th>
                        <th>Service</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>

                        <td>{loggedInUser?.displayName}</td>
                        <td>$ {selected?.price}</td>
                        <td>{loggedInUser.email}</td>
                        <td> {selected?.name}</td>
                        
                    </tr>
                    <tr>

                        
                        
                        
                    </tr>
                </tbody>
            </table>
            <ProcessPayment></ProcessPayment>
            <br/>
            </div>
            
            <div>
            
            </div>
        </div>
    );
};

export default Book;