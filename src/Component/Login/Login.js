import React, { useContext, useState } from 'react';
import logo from '../../logos/Group 1329.png';
import { Link, useHistory, useLocation } from 'react-router-dom';
import * as  firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.Config';
import { UserContext } from '../../App';
firebase.initializeApp(firebaseConfig);


const Login = () => {
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: ''
    })

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };


    const provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(provider)
            .then(result => {
                const { displayName, email } = result.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email

                }
                setUser(signedInUser);
                setLoggedInUser(signedInUser);
                history.replace(from);
            })
            .catch(error => {
                console.log(error);
                console.log(error.message);
            })
    }

    const handleSignOut = () => {
        firebase.auth().signOut()
            .then(response => {
                const signedOutUser = {
                    isSignedIn: false,
                    name: '',
                    email: ''
                }

                setUser(signedOutUser);
            })
            .catch(error => {
                console.log(error);
                console.log(error.message);
            })
    }


    return (
        <div >
            <div style={{ marginTop: '30px', textAlign: 'center' }}>
                <img href="/home" style={{ height: '50px' }} src={logo} alt="" />
                <br />
                <Link to="/home" style={{ border: '2px solid black' }} class="nav-link" >Home </Link>

                <div class="jumbotron">

                    <h1>Sign In</h1>

                    {
                        user.isSignedIn ?
                            <button onClick={handleSignOut} class="btn btn-danger btn-lg" href="#" role="button">Sign Out</button> :
                            <button onClick={handleGoogleSignIn} class="btn btn-primary btn-lg" href="#" role="button">Continue with Google</button>
                    }

                </div>

                {
                    user.isSignedIn && <div>
                        <h3> Welcome {user.name}!</h3>
                        <h5>Email: {user.email}</h5>
                    </div>
                }
            </div>

        </div>
    );
}

export default Login;