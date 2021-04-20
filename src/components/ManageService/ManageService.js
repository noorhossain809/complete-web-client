import React from 'react';
import ServiceDetail from '../Home/ServiceDetail/ServiceDetail';
import Services from '../Home/Services/Services';
import Sidebar from '../Sidebar/Sidebar';
import ServiceManageCard from './ServiceManageCard/ServiceManageCard/ServiceManageCard';

const ManageService = () => {
    return (
        <div className="row">
            <div className="col-md-2">
                    <Sidebar></Sidebar>
            </div>
            <div className="col-md-10">
            <h2>This is manage product</h2>
                <ServiceManageCard></ServiceManageCard>
            </div>
        </div>
    );
};

export default ManageService;