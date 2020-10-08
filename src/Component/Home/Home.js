import React from 'react';
import Header from '../Header/Header';
import FakeData from '../FakeData/FakeData';
import Activities from '../Activities/Activities';
import Body from '../Body/Body';


const Home = () => {
    return (
        <div>

            <Body />
            <div className="row" style={{ marginLeft: '50px' }}>
                {
                    FakeData.map(activity =>
                        <Activities activity={activity}></Activities>

                    )
                }
            </div>

        </div>
    );
};

export default Home;