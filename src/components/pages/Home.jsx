import React from 'react';
import { Link } from 'react-router-dom'
import CustomizableButton from '../utilities/CustomizableButton';
import HeadingPrimary from '../utilities/typography/HeadingPrimary';

const Home = () => {
    return(
        <div className="home">
            <div className="home__left">
                <div className="home__container--text flex-center">
                    <HeadingPrimary 
                    title="Hana Shop"
                    text="The biggest anime & videogame figures online shop" /> 
                </div>
                <div className="home__container--text flex-center">
                    <Link className="home__styled-link" to="/store">
                        <CustomizableButton text="Go to store" stylesheet="btn btn--outline btn--outline-white btn--primary btn--animated"/>
                    </Link>
                </div>
                <div className="home__container--links flex-center gap-lg">
                    <Link className="unstyled-link" to="/about">
                        <h1 className="styled-link styled-link--animated">About Us</h1>
                    </Link>
                    <Link className="unstyled-link" to="/contact">
                        <h1 className="styled-link styled-link--animated">Contact</h1>
                    </Link>
                </div>
            </div>
            <div className="home__right flex-center">
            </div>
        </div>
    );
}

export default Home;