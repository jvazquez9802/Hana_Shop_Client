import React from 'react';
import { Link } from 'react-router-dom'
import CustomizableButton from '../../utilities/CustomizableButton';
import HeadingPrimary from '../../utilities/typography/HeadingPrimary';
import { useTranslation } from 'react-i18next';

const Cover = () => {
    const [t, i18n] = useTranslation("global");

    return(
        <div className="cover">
            <div className="cover__content">
                <div className="cover__container--text flex-center">
                    <HeadingPrimary 
                    title={t("store.name")}
                    text={t("store.description")} /> 
                </div>
                <div className="cover__container--text flex-center">
                    <Link className="cover__styled-link" to="/store">
                        <CustomizableButton text={t("cover.go_to_store")} stylesheet="btn btn--outline btn--outline-white btn--primary btn--animated"/>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Cover;