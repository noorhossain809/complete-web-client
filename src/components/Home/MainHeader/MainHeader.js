import React from 'react';
import img from '../../../images/roadClean.jpg'

const MainHeader = () => {
    return (
        <main style={{height: '600px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                   <h1 style={{color:'#3A4256',fontWeight:'400'}}>The Best Cleaning Service</h1>
                   <h5 style={{fontWeight:'700'}}>with <span style={{color:'#1CC7C1'}}>EcoDrive</span></h5>
                   <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ea recusandae voluptatibus animi praesentium tempore.</p>
                   
            </div>
            <div className="col-md-6">
                <img src={img} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default MainHeader;