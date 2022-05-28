import React from 'react';

const HeadingPrimary = ({ title, text }) => {
    return (
        <h1 class="heading-primary">
            <span class="heading-primary--main">{title}</span>
            <span class="heading-primary--sub">{text}</span>
        </h1>
    )

}

export default HeadingPrimary;