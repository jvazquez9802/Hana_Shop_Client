import React from 'react';

const HeadingSecondary = ({ title, text }) => {
    return (
        <h2 class="heading-secondary mt-lg">
            <span class="heading-secondary--main">{title}</span>
            <span class="heading-secondary--sub">{text}</span>
        </h2>
    )

}

export default HeadingSecondary;