import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { baseUrl } from '../../../url';
import './Allforms.css'; 

function Allforms() {
    const [forms, setForms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`${baseUrl}/forms`)
            .then(response => {
                setForms(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError('Error fetching forms');
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="container pt-5 ">
            <h1 className="purple">Submitted Forms</h1>
            <div className="row">
                {forms.map((form, index) => (
                    <div key={index} className="col-lg-4 col-md-6 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title purple">{form.name}</h5>
                                <p className="card-text"><strong>Email:</strong> {form.email}</p>
                                <p className="card-text"><strong>Mobile:</strong> {form.mobile}</p>
                                <p className="card-text"><strong>Budget:</strong> {form.budget}</p>
                                <p className="card-text"><strong>Travel Date:</strong> {form.travelDate}</p>
                                <p className="card-text"><strong>Number of People:</strong> {form.numberOfPeople}</p>
                                <p className="card-text"><strong>Interest:</strong> {form.interest}</p>
                                <p className="card-text"><strong>Desired Locations:</strong> {form.desiredLocations.join(', ')}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Allforms;
