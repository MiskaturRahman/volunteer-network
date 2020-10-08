import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import FakeData from '../FakeData/FakeData';
import RegistrationDone from '../RegistrationDone/RegistrationDone';
import './Registration.css'

const Registration = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const onSubmit = data => {
        const registrationDetail = { ...loggedInUser, data, orderTime: new Date() }

        fetch('http://localhost:5500/programRegistration', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(registrationDetail)
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    alert('registration successful');
                }
            })

    };



    return (

        <form className="registration-form" onSubmit={handleSubmit(onSubmit)}>

            <h1>Hello! {loggedInUser.name}</h1>
            <h4>Register here..</h4>
            <RegistrationDone />
            <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Your Name" />
            {errors.name && <span className="error">Name is required</span>}
            <br />

            <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Your Email" />
            {errors.email && <span className="error">Email is required</span>}
            <br />
            <input name="activity" ref={register({ required: true })} placeholder="Your Activity" />
            {errors.activity && <span className="error">activity is required</span>}
            <br />
            <input name="address" ref={register({ required: true })} placeholder="Your Address" />
            {errors.address && <span className="error">Address is required</span>}
            <br />
            <input name="phone" ref={register({ required: true })} placeholder="Your Phone Number" />
            {errors.phone && <span className="error">Phone Number is required</span>}
            <br />
            <input type="submit" />
        </form>
    );
};

export default Registration;