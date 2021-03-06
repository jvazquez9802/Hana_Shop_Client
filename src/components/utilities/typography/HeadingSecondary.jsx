import React from 'react';

const HeadingSecondary = ({ title, text }) => {
    return (
        <h2 className="heading-secondary">
            <span className="heading-secondary--main">{title}</span>
            <span className="heading-secondary--sub">{text}</span>
        </h2>
    )

}

export default HeadingSecondary;