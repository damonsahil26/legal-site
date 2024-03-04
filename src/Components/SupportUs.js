import React from 'react';

const SupportUs = () => {
    return (
        <div>
            <h2 className="MuiTypography-root MuiTypography-h6 mui-180p037">
                <span>
                    They support us
                </span>
            </h2>
            <div className="MuiBox-root mui-zitybv"></div>
            <div className="MuiGrid2-root MuiGrid2-container MuiGrid2-direction-xs-row MuiGrid2-spacing-xs-4 mui-pni29q">
                <div className="MuiGrid2-root MuiGrid2-direction-xs-row mui-124fws5">
                    <img
                        alt="French tech springboard"
                        loading="lazy"
                        width="70"
                        height="80"
                        decoding="async"
                        data-nimg="1"
                        className="mui-1yioz45"
                        style={{ color: 'transparent' }}
                        src={process.env.PUBLIC_URL + "/images/french.webp"} />
                </div>
                <div className="MuiGrid2-root MuiGrid2-direction-xs-row mui-124fws5">
                    <img
                        alt="bpi"
                        loading="lazy"
                        width="150"
                        height="41"
                        decoding="async"
                        data-nimg="1"
                        className="mui-1fnny7k"
                        style={{ color: 'transparent' }}
                        src={process.env.PUBLIC_URL + "/images/bpifrance.webp"}
                    />
                </div>
                <div className="MuiGrid2-root MuiGrid2-direction-xs-row mui-124fws5">
                    <img
                        alt="agoranov"
                        loading="lazy"
                        width="120"
                        height="62"
                        decoding="async"
                        data-nimg="1"
                        className="mui-1yioz45"
                        style={{ color: 'transparent' }}
                        src={process.env.PUBLIC_URL + "/images/agoranov.webp"}
                    />
                </div>
                <div className="MuiGrid2-root MuiGrid2-direction-xs-row mui-124fws5">
                    <img
                        alt="network undertake"
                        loading="lazy"
                        width="100"
                        height="68"
                        decoding="async"
                        data-nimg="1"
                        className="mui-1yioz45"
                        style={{ color: 'transparent' }}
                        src={process.env.PUBLIC_URL + "/images/entreprendre.webp"}
                    />
                </div>
            </div>
            <div className="MuiBox-root mui-zitybv"></div>
        </div>
    );
};

export default SupportUs;