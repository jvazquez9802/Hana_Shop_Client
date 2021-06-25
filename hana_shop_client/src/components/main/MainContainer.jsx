import React from 'react';
import { Link } from 'react-router-dom'
import Hana_face from '../../assets/images/Hana_face.png';
import CustomizableButton from '../utilities/CustomizableButton';
import '../../assets/stylesheets/main_container.scss';


const MainContiner = () => {
    return(
        <div className="main-container">
            <div className="left">
                <div className="text-container">
                    <p className="main-text">
                        Welcome to Hana, on this website you will find various products that may be of interest to you.
                    </p> 
                </div>
                <div className="button-container">
                    <Link className="styled-link" to="/store">
                        <CustomizableButton text="Go to store" stylesheet="button-main"/>
                    </Link>
                </div>         
                <div className="link-container">
                    <Link className="styled-link" to="/about"><h1 className="link">About Us</h1></Link>
                    <Link className="styled-link" to="/contact"><h1 className="link">Contact</h1></Link>
                </div>
            </div>
            <div className="right">
                <img className="hana" src={Hana_face} alt="Hana_face" />
            </div>
        </div>
    );
}

export default MainContiner;