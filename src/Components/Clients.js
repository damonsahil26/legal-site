import React from 'react';
import './css/Clients.css';

const Clients = () => {
    return (
        <div className="MuiBox-root mui-1fcx95e">
            <div className="MuiBox-root mui-da0opz">
                <h6 className="MuiTypography-root MuiTypography-subtitle2 MuiTypography-gutterBottom mui-psqtx">
                    THEY TRUST US
                </h6>
            </div>
            <hr className="MuiDivider-root MuiDivider-middle mui-7t3oco" />
            <div className="MuiBox-root mui-vqwd1x">
                <div className="MuiBox-root mui-19midj6">
                    <img
                        alt="Pennylane Logo"
                        loading="lazy"
                        width="188"
                        height="40"
                        decoding="async"
                        data-nimg="1"
                        style={{ color: 'transparent' }}
                        src={process.env.PUBLIC_URL + "/images/Pennylane.svg"}
                    />
                </div>
                <div className="MuiBox-root mui-19midj6">
                    <img
                        alt="My Unisoft logo"
                        loading="lazy"
                        width="155"
                        height="40"
                        decoding="async"
                        data-nimg="1"
                        style={{ color: 'transparent' }}
                        src={process.env.PUBLIC_URL + "/images/Unisoft.svg"}
                    />
                </div>
                <div className="MuiBox-root mui-19midj6">
                    <img
                        alt="Logo Qonto"
                        loading="lazy"
                        width="137"
                        height="40"
                        decoding="async"
                        data-nimg="1"
                        style={{ color: 'transparent' }}
                        src={process.env.PUBLIC_URL + "/images/Qonto.svg"}
                    />
                </div>
                <div className="MuiBox-root mui-19midj6">
                    <img
                        alt="CPA Audit Logo"
                        loading="lazy"
                        width="109"
                        height="40"
                        decoding="async"
                        data-nimg="1"
                        style={{ color: 'transparent' }}
                        // srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fauditcpa.4909c14b.png&w=128&q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fauditcpa.4909c14b.png&w=256&q=75 2x"
                        src={process.env.PUBLIC_URL + "/images/auditcpa.webp"} />
                </div>
                <div className="MuiBox-root mui-19midj6">
                    <img
                        alt="Welyb logo"
                        loading="lazy"
                        width="128"
                        height="50"
                        decoding="async"
                        data-nimg="1"
                        style={{ color: 'transparent' }}
                        src={process.env.PUBLIC_URL + "/images/Welyb.svg"} />
                </div>
            </div>
        </div>
    );
};

export default Clients;