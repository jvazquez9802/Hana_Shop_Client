import React from 'react'
import '../../assets/stylesheets/customizable_button.scss'

const CustomizableButton = ({text,stylesheet}) => {
    return(
        <button className={stylesheet}>
            {text}
        </button>
    )
    
}

export default CustomizableButton;