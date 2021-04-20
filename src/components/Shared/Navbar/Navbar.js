import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
       
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div style={{height:'75px'}} class="container-fluid bg-danger">
        <h2 className="text-white text-uppercase">Dry Clean</h2>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active ms-5" aria-current="page" href="/home">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active ms-5" href="/dashboard">Dashboard</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active ms-5" href="/admin">Admin</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active ms-5 " href="/login">Login</a>
              </li>
              
              

              
            </ul>
            
          </div>
        </div>
      </nav>
        
    );
};

export default Navbar;