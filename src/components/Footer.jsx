import React from 'react';
import HeadingSecondary from './utilities/typography/HeadingSecondary';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const [t, i18n] = useTranslation("global");

    return (
        <div className="footer">
            <div className="footer__content">
                <div className="footer_container--heading">
                    <HeadingSecondary
                        className="footer__heading"
                        title={""}
                        text={"SITE LINKS"} />
                </div>
                <div className="footer_container--links">
                    <Link className="unstyled-link footer__styled-link unstyled-link" to="/store">
                        {t("help_links.faq")}
                    </Link>
                    <Link className="unstyled-link footer__styled-link" to="/store">
                        {t("help_links.customer_service")}
                    </Link>
                    <Link className="unstyled-link footer__styled-link" to="/store">
                        {t("help_links.shipping_and_returns")}
                    </Link>
                    <Link className="unstyled-link footer__styled-link" to="/store">
                        {t("help_links.privacy_policy")}
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Footer;