import React, { useEffect, useState } from 'react';
import AllOrdersDataTable from '../../Dashboard/AllOrdersDataTable/AllOrdersDataTable';
import Sidebar from '../../Sidebar/Sidebar';

const AllOrders = () => {
    const [orders, setOrders] = useState([])

    useEffect( () => {
        fetch('http://localhost:5001/orderList')
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [])
    return (
        <div className="container-fluid row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9 mt-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
            <h5 style={{color:'#0fcfec'}} className="text-center mb-3">All Orders</h5>
            <AllOrdersDataTable orders={orders}></AllOrdersDataTable>
            </div>
        </div>
    );
};

export default AllOrders;