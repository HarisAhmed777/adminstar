import React from "react";
import { Link } from 'react-router-dom';
import './admindashboard.css';

function Admindashboard() {
    return (
        <div className="admin-dashboard-container hei ">
            <h1 className="admin-dashboard-header clr">Hello Admin</h1>
            <div className="admin-dashboard-buttons">
                <Link to='/allusers'>
                    <button className="admin-dashboard-button btn-primary">Users</button>
                </Link>
                <Link to='/allbookings'>
                    <button className="admin-dashboard-button btn-primary">Bookings</button>
                </Link>
                <Link to='/allforms'>
                    <button className="admin-dashboard-button btn-primary">Package requests </button>
                </Link>
            </div>
        </div>
    );
}

export default Admindashboard;
