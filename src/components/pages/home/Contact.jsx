import React from 'react';
import SocialMediaContact from '../../utilities/SocialMediaContact';
import Lettuce_1 from '../../../assets/images/lettuce-1.png';
import Lettuce_2 from '../../../assets/images/lettuce-2.png';
import Lettuce_3 from '../../../assets/images/lettuce-3.png';
import ContactEmail from '../../../assets/images/contact_email.png';
import ContactFacebook from '../../../assets/images/contact_facebook.png';
import ContactInstagram from '../../../assets/images/contact_instagram.png';
import HeadingSecondary from '../../utilities/typography/HeadingSecondary';
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const [t, i18n] = useTranslation("global");

    return (
        <div className="contact">
            <div className="contact__content">
                <div className="contact__left flex-center">
                    <img src={Lettuce_1} alt="lettuce-1" className="contact__lettuce contact__lettuce--1" />
                    <img src={Lettuce_2} alt="lettuce-2" className="contact__lettuce contact__lettuce--2" />
                    <img src={Lettuce_3} alt="lettuce-3" className="contact__lettuce contact__lettuce--3" />
                </div>
                <div className="contact__right flex-center">
                    <HeadingSecondary
                        title={t("contact.get_in_touch")}
                        text={t("contact.send_a_message")} />
                    <div className="contact__social-media-contact flex-center">
                        <SocialMediaContact img={ContactEmail} text="hanaShop@gmail.com" url="#" />
                        <SocialMediaContact img={ContactFacebook} text="Hana Shop Culture" url="#" />
                        <SocialMediaContact img={ContactInstagram} text="@hana_shop_gallery" url="#" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;