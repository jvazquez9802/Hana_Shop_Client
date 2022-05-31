import React from 'react';
import { Link } from 'react-router-dom'
import CustomizableButton from '../../utilities/CustomizableButton';
import HeadingPrimary from '../../utilities/typography/HeadingPrimary';

const Cover = () => {
    return(
        <div className="cover">
            <div className="cover__content">
                <div className="cover__container--text flex-center">
                    <HeadingPrimary 
                    title="Hana Shop"
                    text="The biggest anime & videogame figures online shop" /> 
                </div>
                <div className="cover__container--text flex-center">
                    <Link className="cover__styled-link" to="/store">
                        <CustomizableButton text="Go to store" stylesheet="btn btn--outline btn--outline-white btn--primary btn--animated"/>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Cover;