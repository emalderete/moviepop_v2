import React from 'react';
import Navbar from './common/Navbar';
import cinema from './common/img/cinema.svg';

const MainPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='mainContainer'>
                <div className='mainIcon'>
                    <img className='mainIconSvg' src={cinema} alt=""></img>
                </div>
                <h1 className='mainIconTitle'>MoviePop!</h1>
            </div>
        </div>
    );
};

export default MainPage;