import React, { useEffect, useState } from 'react';

const RegistrationDone = () => {
    const [registrationList, setRegistrationList] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5500/registrationHistory')
            .then(response => response.json())
            .then(data => setRegistrationList(data));
    }, [])
    return (
        <div class="jumbotron" style={{ textAlign: 'center' }}>
            <h1>Your Dashboard</h1>
            <h3>You have registered for: {registrationList.length} programs.</h3>
            {
                registrationList.map(
                    registration =>
                        <li>Name: <b>{registration.name}</b> Your Email: <b>{registration.email}</b>
                        Registered Program:<b>{registration.program.activity}</b>
                        </li>
                )
            }
        </div>
    );
};

export default RegistrationDone;