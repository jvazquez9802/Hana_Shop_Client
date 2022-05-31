import React from 'react';
import Cover from './Cover';
//import About from './About';
import Contact from './Contact';

const Home = () => {
    return (
        <div className="home">
            <div className="home__cover">
                <Cover />
            </div>
            {/*<div className="home__about">
                <About />
            </div> */}
            <div className="home__contact">
                <Contact />
            </div>
        </div>
    )
}

export default Home;