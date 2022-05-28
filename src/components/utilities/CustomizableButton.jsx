import React from 'react'

const CustomizableButton = ({ text, stylesheet }) => {
    return (
        <button className={stylesheet}>
            {text}
        </button>
    )

}

export default CustomizableButton;