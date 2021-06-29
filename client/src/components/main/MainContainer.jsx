import React from 'react';
import { Link } from 'react-router-dom'
import Main_hana_face from '../../assets/images/main_hana_face.png';
import CustomizableButton from '../utilities/CustomizableButton';
import '../../assets/stylesheets/main_container.scss';


const MainContiner = () => {
    return(
        <div className="main-main-container">
            <div className="main-left">
                <div className="main-text-container">
                    <p className="main-text">
                        Welcome to Hana, on this website you will find various products that may be of interest to you.
                    </p> 
                </div>
                <div className="main-button-container">
                    <Link className="main-styled-link" to="/store">
                        <CustomizableButton text="Go to store" stylesheet="main-button"/>
                    </Link>
                </div>         
                <div className="main-link-container">
                    <Link className="main-styled-link" to="/about"><h1 className="main-link">About Us</h1></Link>
                    <Link className="main-styled-link" to="/contact"><h1 className="main-link">Contact</h1></Link>
                </div>
            </div>
            <div className="main-right">
                <img className="main-hana" src={Main_hana_face} alt="Hana_face" />
            </div>
        </div>
    );
}

export default MainContiner;