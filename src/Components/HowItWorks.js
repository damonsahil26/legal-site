import React from 'react';
import './css/HowItWorks.css';


const HowItWorks = () => {
    return (
        <div className="MuiContainer-root MuiContainer-maxWidthLg mui-1qsxih2">
            <div className="MuiBox-root mui-130jr3z">
                <h2 className="MuiTypography-root MuiTypography-h4 mui-1st9khg">
                    <span style={{ verticalAlign: 'inherit' }}>How it works?</span>
                </h2>
                <div className="MuiBox-root mui-kin4td">
                    <div className="MuiBox-root mui-5d75os">
                        <div className="MuiBox-root mui-1b9rfpx">
                            <img
                                alt="picture"
                                loading="lazy"
                                width="160"
                                height="160"
                                decoding="async"
                                data-nimg="1"
                                style={{ color: 'transparent' }}
                                src={process.env.PUBLIC_URL + "/images/howitworks_1.svg"}
                            />
                        </div>
                        <h4 className="MuiTypography-root MuiTypography-h6 MuiTypography-gutterBottom mui-u2y8vh">
                            <span style={{ verticalAlign: 'inherit' }}>Create</span>
                        </h4>
                        <p className="MuiTypography-root MuiTypography-body1 mui-1nxule9">
                            <span style={{ verticalAlign: 'inherit' }}>
                                Create a new company or add an existing company to the platform for free. It only takes a few minutes thanks
                                to our{' '}
                            </span>
                            <a
                                className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways mui-rj9owb"
                                href="/search"
                            >
                                <span style={{ verticalAlign: 'inherit' }}>Search tool</span>
                            </a>
                        </p>
                    </div>
                    <div className="MuiBox-root mui-5d75os">
                        <div className="MuiBox-root mui-1b9rfpx">
                            <img
                                alt="picture"
                                loading="lazy"
                                width="291"
                                height="194"
                                decoding="async"
                                data-nimg="1"
                                style={{ color: 'transparent' }}
                                src={process.env.PUBLIC_URL + "/images/howitworks_2.svg"}
                            />
                        </div>
                        <h4 className="MuiTypography-root MuiTypography-h6 MuiTypography-gutterBottom mui-u2y8vh">
                            <span style={{ verticalAlign: 'inherit' }}>Organize</span>
                        </h4>
                        <p className="MuiTypography-root MuiTypography-body1 mui-1nxule9">
                            <span style={{ verticalAlign: 'inherit' }}>
                                Take advantage of the many features offered by the secure platform for managing your data and legal
                                documents
                            </span>
                        </p>
                    </div>
                    <div className="MuiBox-root mui-5d75os">
                        <div className="MuiBox-root mui-1b9rfpx">
                            <img
                                alt="picture"
                                loading="lazy"
                                width="160"
                                height="128"
                                decoding="async"
                                data-nimg="1"
                                style={{ color: 'transparent' }}
                                src={process.env.PUBLIC_URL + "/images/howitworks_3.svg"}
                            />
                        </div>
                        <h4 className="MuiTypography-root MuiTypography-h6 MuiTypography-gutterBottom mui-u2y8vh">
                            <span style={{ verticalAlign: 'inherit' }}>Pilot</span>
                        </h4>
                        <p className="MuiTypography-root MuiTypography-body1 mui-1nxule9">
                            <span style={{ verticalAlign: 'inherit' }}>
                                Your legal needs are covered Alex supports you in your operations at each stage of the development of your
                                company.
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;