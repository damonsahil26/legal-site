import React from 'react';
import './css/Footer.css';

const Footer = () => {
    return (
        <div className="MuiContainer-root MuiContainer-maxWidthLg mui-1qsxih2">
            <div className="MuiGrid2-root MuiGrid2-container MuiGrid2-direction-xs-row MuiGrid2-spacing-xs-3 mui-oqml47">
                <div className="MuiGrid2-root MuiGrid2-direction-xs-row mui-124fws5">
                    <a className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways active mui-rj9owb" href="/">
                        <img alt="Alex logo" loading="lazy" width="98" height="65" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src={process.env.PUBLIC_URL + "/images/logo.svg"} />
                    </a>
                </div>
                <div className="MuiGrid2-root MuiGrid2-direction-xs-row MuiGrid2-grid-xs-true mui-1hoyqw5"></div>
                <div className="MuiGrid2-root MuiGrid2-direction-xs-row MuiGrid2-grid-xs-12 MuiGrid2-grid-sm-3 mui-plzzdb">
                    <p className="MuiTypography-root MuiTypography-body1 mui-12k1hg5">
                        <span>Contact us</span>
                    </p>
                    <div className="MuiBox-root mui-qe6dar">
                        <a className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways MuiTypography-root MuiTypography-body1 MuiTypography-gutterBottom mui-jemq9z" href="mailto:contact@alexlegal.fr">
                            <div className="MuiBox-root mui-12z0wuy">
                                <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="EmailIcon">
                                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4-8 5-8-5V6l8 5 8-5z"></path>
                                </svg>
                            </div>
                            <span>contact@alexlegal.fr</span>
                        </a>
                        <a className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways MuiTypography-root MuiTypography-body1 MuiTypography-gutterBottom mui-jemq9z" href="https://www.linkedin.com/company/alex-legal/" target="_blank">
                            <div className="MuiBox-root mui-12z0wuy">
                                <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LinkedInIcon">
                                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
                                </svg>
                            </div>
                            <span>Linkedin</span>
                        </a>
                    </div>
                </div>
                <div className="MuiGrid2-root MuiGrid2-direction-xs-row MuiGrid2-grid-xs-12 MuiGrid2-grid-sm-3 mui-plzzdb">
                    <p className="MuiTypography-root MuiTypography-body1 mui-12k1hg5">
                        <span>Alex</span>
                    </p>
                    <div className="MuiBox-root mui-qe6dar">
                        <a className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways MuiTypography-root MuiTypography-body1 MuiTypography-gutterBottom mui-jemq9z" href="/faq">
                            <span>FAQs</span>
                        </a>
                        <a className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways MuiTypography-root MuiTypography-body1 MuiTypography-gutterBottom mui-jemq9z" href="/blog">
                            <span>Blog</span>
                        </a>
                        <a className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways MuiTypography-root MuiTypography-body1 MuiTypography-gutterBottom mui-jemq9z" href="/jobs">
                            <span>Jobs</span>
                        </a>
                    </div>
                </div>
                <div className="MuiGrid2-root MuiGrid2-direction-xs-row MuiGrid2-grid-xs-12 MuiGrid2-grid-sm-3 mui-plzzdb">
                    <p className="MuiTypography-root MuiTypography-body1 mui-12k1hg5">
                        <span>Legal</span>
                    </p>
                    <div className="MuiBox-root mui-qe6dar">
                        <a className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways MuiTypography-root MuiTypography-body1 MuiTypography-gutterBottom mui-jemq9z" href="/legal-notice">
                            <span>Legal Notice</span>
                        </a>
                        <a className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways MuiTypography-root MuiTypography-body1 MuiTypography-gutterBottom mui-jemq9z" href="/cookies">
                            <span>Cookie Policy</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="MuiBox-root mui-1yuhvjn">
                <button className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium mui-1894tnf" tabIndex="0" type="button">
                    <span>Cookie management</span>
                </button>
                <p className="MuiTypography-root MuiTypography-body1 mui-1sj6157">
                    <span>© 2024 Alex Legal. All rights reserved</span>
                </p>
            </div>
        </div>
    );
};

export default Footer;