import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const RegistrationDone = () => {
    const [registrationList, setRegistrationList] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect(() => {
        fetch('https://afternoon-falls-65079.herokuapp.com/registrationHistory?email=' + loggedInUser.email)
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
                        Registered Program:<b>{registration.data.activity}</b>
                        </li>
                )
            }
        </div>
    );
};

export default RegistrationDone;