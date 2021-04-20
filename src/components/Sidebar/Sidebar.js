import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faGripHorizontal, faUsers, faCalendarAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { UserContext } from '../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [isAdmin, setIsAdmin] = useState(false)


    useEffect(() => {
        fetch('http://localhost:5001/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data))
    }, [])


    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: '100vh' }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/home" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Home</span>
                    </Link>
                </li>
                {isAdmin ? <div>
                    <li>
                        <Link to="/orderList" className="text-white">
                            <FontAwesomeIcon icon={faGripHorizontal} /> <span>Order list</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/makeAdmin" className="text-white">
                            <FontAwesomeIcon icon={faGripHorizontal} /> <span>Make Admin</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addService" className="text-white">
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Add Service</span></Link>
                    </li>
                    <li>
                        <Link to="/manageServices" className="text-white">
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Manage Services</span></Link>
                    </li>
                </div>
                    :

                    <div>
                        <li>
                            <Link to="/buy-product/:id" className="text-white">
                                <FontAwesomeIcon icon={faGripHorizontal} /> <span>Book</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/booking" className="text-white">
                                <FontAwesomeIcon icon={faCalendarAlt} /> <span>Booking list</span>
                            </Link>
                        </li>


                        <li>
                            <Link to="/review" className="text-white">
                                <FontAwesomeIcon icon={faUserPlus} /> <span>Review</span></Link>
                        </li>
                    </div>}

                <li>
                    <Link to="/doctor/setting" className="text-white">
                        <FontAwesomeIcon icon={faCog} /> <span>Setting</span></Link>
                </li>


            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;