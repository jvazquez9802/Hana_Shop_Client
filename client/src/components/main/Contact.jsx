import React from 'react';
import SocialMediaContact from '../utilities/SocialMediaContact';
import ContactDarkness from '../../assets/images/contact_darkness.png';
import ContactEmail from '../../assets/images/contact_email.png';
import ContactFacebook from '../../assets/images/contact_facebook.png';
import ContactInstagram from '../../assets/images/contact_instagram.png';
import '../../assets/stylesheets/contact.scss';

const Contact = () => {
    return (
        <div className="main-container">
            <div className="contact-left">
                <img src={ContactDarkness} alt="contact Darkness" className="contact-darkness" />
            </div>
            <div className="contact-right">
                <h1 className="contact-title">Get in touch</h1>
                <p className="contact-text">Send us your cabbage!</p>
                <div className="contact-social-media-contact">
                    <SocialMediaContact img={ContactEmail} text="hanaShop@gmail.com" url="#"/>
                    <SocialMediaContact img={ContactFacebook} text="Hana Shop Culture" url="#"/>
                    <SocialMediaContact img={ContactInstagram} text="@hana_shop_gallery" url="#"/>
                </div>
            </div>
        </div>
    );
}

export default Contact;