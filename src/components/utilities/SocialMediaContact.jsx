import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';

const SocialMediaContact = ({img,text,url}) => {
    return(
        <a className="social-media-contact" href={url}>
            <div className="social-media-contact__contact">
                <img className="social-media-contact__img" src={img} alt="social media" />
                <span className="social-media-contact__url">{text}</span>
                <FontAwesomeIcon className="social-media-contact__arrow" icon={faCircleArrowRight} />
            </div>      
        </a>      
    )
    
}

export default SocialMediaContact;