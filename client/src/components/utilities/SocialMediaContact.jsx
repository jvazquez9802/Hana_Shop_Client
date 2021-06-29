import React from 'react'
import '../../assets/stylesheets/social_media_contact.scss'

const SocialMediaContact = ({img,text,url}) => {
    return(
        <a className="contact-styled-link" href={url}>
            <div className="social-media-contact">
                <img className="social-media-img" src={img} alt="social media image" />
                <p className="social-media-url" >{text}</p>
            </div>      
        </a>      
    )
    
}

export default SocialMediaContact;