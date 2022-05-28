import React from 'react';
import about_beatrice from '../../assets/images/about_beatrice.png';
import about_beatrice_2 from '../../assets/images/about_beatrice_2.png';
import certification_logos from '../../assets/images/certification_logos.png';

const About = () => {
    return (
        <div className="about">
            <div className="about__left flex-center">
                <h2 class="heading-secondary mt-lg">
                    <span class="heading-secondary--main">About Us</span>
                    <span class="heading-secondary--sub">We are a company dedicated to the sale and distribution of articles related to anime and videogame culture.</span>
                </h2>
                <div class="about__logos">
                    <img className="about__certification-logos" src={certification_logos} alt="certification-logos" />
                </div>
            </div>     
            <div className="about__right">
                <img className="about__beatrice-1" src={about_beatrice} alt="about__beatrice-1" />
                <img className="about__beatrice-2" src={about_beatrice_2} alt="about__beatrice-1" />
            </div>
        </div>
    );
}

export default About;