import React from 'react';
import './Activites.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const Activities = ({ activity }) => {
    console.log(activity);
    return (

        <div id="cards_landscape_wrap-2">

            <Link to={`/registration`}>
                <div className="col-md-3" className="card card-flyer" style={{ width: '16rem', margin: '30px', }}>
                    <img className="image-box" src={require(`../../images/${activity.image}`)} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 style={{ backgroundColor: activity.color, color: "white" }} className="p-4 rounded">{activity.title}</h5>
                        {/* <Link to={`/registrationForm/${event.title}`}> */}
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Activities;