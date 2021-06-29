import React from 'react';
import about_beatrice from '../../assets/images/about_beatrice.png';
import about_beatrice_2 from '../../assets/images/about_beatrice_2.png';

import '../../assets/stylesheets/about.scss';

const About = () => {
    return (
        <div className="about-container">
            <div className="about-left">
                <h1 className="about-title">About Us</h1>
                <p className="about-text">We are a company dedicated to the sale and distribution of articles related to anime culture.</p>
            </div>
            <div className="about-right">
                <img className="about-beatrice-1" src={about_beatrice} alt="about_beatrice-1" />
                <img className="about-beatrice-2" src={about_beatrice_2} alt="about_beatrice-1" />
            </div>
        </div>
    );
}

export default About;