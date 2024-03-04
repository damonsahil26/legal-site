import React from 'react';
import './css/Navbar.css';

const Navbar = () => {
    return (
        <header className="MuiPaper-root MuiPaper-elevation MuiPaper-elevation0 MuiAppBar-root MuiAppBar-colorTransparent MuiAppBar-positionFixed mui-fixed mui-1vb5z3z">
            <div className="MuiContainer-root MuiContainer-maxWidthXl mui-1ekb41w">
                <div className="MuiGrid2-root MuiGrid2-container MuiGrid2-direction-xs-row mui-85cndy">
                    <div className="MuiGrid2-root MuiGrid2-direction-xs-row mui-124fws5">
                        <div className="MuiGrid2-root MuiGrid2-container MuiGrid2-wrap-xs-nowrap MuiGrid2-direction-xs-row MuiGrid2-spacing-xs-3 mui-xx6fcg">
                            <div className="MuiGrid2-root MuiGrid2-direction-xs-row mui-1gszo8s">
                                <a className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways active mui-rj9owb" href="/">
                                    <img
                                        alt="Alex Logo"
                                        loading="lazy"
                                        width="91"
                                        height="60"
                                        decoding="async"
                                        data-nimg="1"
                                        src={process.env.PUBLIC_URL + "/images/logo.svg"}
                                        style={{ color: 'transparent' }}
                                    />
                                </a>
                            </div>
                            <div className="MuiGrid2-root MuiGrid2-direction-xs-row mui-1gszo8s">
                                <a className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways mui-15i7lu7" href="/#contact-form">
                                    <font style={{ verticalAlign: 'inherit' }}>Contact</font>
                                </a>
                            </div>
                            <div className="MuiGrid2-root MuiGrid2-direction-xs-row mui-1gszo8s">
                                <a className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways mui-15i7lu7" href="/search">
                                    <font style={{ verticalAlign: 'inherit' }}>Search</font>
                                </a>
                            </div>
                            <div className="MuiGrid2-root MuiGrid2-direction-xs-row mui-1gszo8s">
                                <a className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways mui-15i7lu7" href="/blog">
                                    <font style={{ verticalAlign: 'inherit' }}>Blog</font>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="MuiGrid2-root MuiGrid2-direction-xs-row MuiGrid2-grid-xs-true mui-1hoyqw5"></div>
                    <div className="MuiGrid2-root MuiGrid2-direction-xs-row mui-124fws5">
                        <div className="MuiGrid2-root MuiGrid2-container MuiGrid2-wrap-xs-nowrap MuiGrid2-direction-xs-row MuiGrid2-spacing-xs-2 mui-1xirpp">
                            <div className="MuiGrid2-root MuiGrid2-direction-xs-row mui-1gszo8s">
                                <a
                                    className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineNone MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium mui-1m26cub"
                                    tabIndex="0"
                                    href="/#contact-form"
                                >
                                    <font style={{ verticalAlign: 'inherit' }}>Contact the team</font>
                                    <span className="MuiTouchRipple-root mui-w0pj6f"></span>
                                </a>
                            </div>
                            <div className="MuiGrid2-root MuiGrid2-direction-xs-row mui-1gszo8s">
                                <a
                                    className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineNone MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium mui-1u9h33y"
                                    tabIndex="0"
                                    data-testid="SignInButton"
                                    href="/login"
                                >
                                    <font style={{ verticalAlign: 'inherit' }}>To log in</font>
                                    <span className="MuiTouchRipple-root mui-w0pj6f"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;