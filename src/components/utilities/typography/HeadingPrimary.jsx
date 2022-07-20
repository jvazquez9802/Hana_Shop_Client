import React from 'react';

const HeadingPrimary = ({ title, text }) => {
    return (
        <h1 className="heading-primary">
            <span className="heading-primary--main">{title}</span>
            <span className="heading-primary--sub">{text}</span>
        </h1>
    )

}

export default HeadingPrimary;