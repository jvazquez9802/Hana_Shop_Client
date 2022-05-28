import React from 'react';
import SocialMediaContact from '../utilities/SocialMediaContact';
import ContactDarkness from '../../assets/images/contact_darkness.png';
import Lettuce_1 from '../../assets/images/lettuce-1.png';
import Lettuce_2 from '../../assets/images/lettuce-2.png';
import Lettuce_3 from '../../assets/images/lettuce-3.png';
import ContactEmail from '../../assets/images/contact_email.png';
import ContactFacebook from '../../assets/images/contact_facebook.png';
import ContactInstagram from '../../assets/images/contact_instagram.png';
import HeadingSecondary from '../utilities/typography/HeadingSecondary';

const Contact = () => {
    return (
        <div className="contact">
            <div className="contact__left flex-center">
                <img src={ContactDarkness} alt="contact Darkness" className="contact__darkness" />
                <img src={Lettuce_1} alt="lettuce-1" className="contact__lettuce contact__lettuce--1" />
                <img src={Lettuce_2} alt="lettuce-2" className="contact__lettuce contact__lettuce--2" />
                <img src={Lettuce_3} alt="lettuce-3" className="contact__lettuce contact__lettuce--3" />
            </div>
            <div className="contact__right">
                <HeadingSecondary 
                title="Get in touch"
                text="Send us your cabbage!" />
                <div className="contact__social-media-contact flex-center">
                    <SocialMediaContact img={ContactEmail} text="hanaShop@gmail.com" url="#"/>
                    <SocialMediaContact img={ContactFacebook} text="Hana Shop Culture" url="#"/>
                    <SocialMediaContact img={ContactInstagram} text="@hana_shop_gallery" url="#"/>
                </div>
            </div>
        </div>
    );
}

export default Contact;