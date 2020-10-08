import React from 'react';
import './Body.css';

const Body = () => {
    return (

        <div className="container">
            <div style={{ height: '300px', marginLeft: '150px', padding: '40px' }} className="search">
                <h1 >WE GROW BY HELPING PEOPLE IN NEED.</h1>
                <input style={{ width: '300px', marginLeft: '200px' }} class="form-control" type="search" aria-label="Search" />
                <button style={{ marginLeft: '300px' }} type="button" class="btn btn-dark" type="submit">Search</button>

            </div>
        </div>

    );
};

export default Body;