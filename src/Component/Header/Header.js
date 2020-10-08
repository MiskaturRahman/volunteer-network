import React, { useContext } from 'react';
import logo from '../../logos/Group 1329.png';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);


    return (
        <div className="header">
            <div className="container">
                <div style={{ justifyContent: 'flex-end' }} className="navbar">
                    <nav class="navbar navbar-expand-lg navbar-light">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <img href="/home" style={{ marginRight: '400px', height: '50px' }} src={logo} alt="" />

                        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                                <li class="nav-item active">
                                    <Link to="/home" class="nav-link" >Home </Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/donation" class="nav-link" ><strong>Donation</strong></Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/user" class="nav-link"  ><strong>User</strong></Link>
                                </li>
                                <li>
                                    <Link to="/login" style={{ margin: '5px', padding: '5px' }} class="nav-link btn btn-warning" >
                                        Login
                                        </Link>
                                </li>
                            </ul>

                            <button onClick={() => setLoggedInUser({})} style={{ margin: '5px', padding: '5px' }} class="btn btn-info">Log Out</button>
                            <button style={{ margin: '5px', padding: '5px' }} class="btn btn-dark">Admin</button>
                        </div>
                    </nav>
                </div>

            </div >
        </div>



    );
};

export default Header;