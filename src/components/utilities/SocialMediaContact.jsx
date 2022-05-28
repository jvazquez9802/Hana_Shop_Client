import React from 'react'

const SocialMediaContact = ({img,text,url}) => {
    return(
        <a className="social-media-contact" href={url}>
            <div className="social-media-contact__contact">
                <img className="social-media-contact__img" src={img} alt="social media" />
                <span className="social-media-contact__url">{text}</span>
            </div>      
        </a>      
    )
    
}

export default SocialMediaContact;