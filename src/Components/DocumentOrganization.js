import React, { useState } from 'react';
import './css/DocumentOrganization.css';

const DocumentOrganization = () => {
    const [tabValue, setTabValue] = useState(0);

    const handleTabChange = (newValue) => {
        setTabValue(newValue);
    };

    return (
        <div className="MuiContainer-root MuiContainer-maxWidthLg mui-1qsxih2">
            <div className="MuiBox-root mui-jhpiyy">
                <h2 className="MuiTypography-root MuiTypography-h4 MuiTypography-gutterBottom mui-14rk56i">
                    Organize your legal documentation
                </h2>
                <div className="MuiTabs-root mui-1y7ex7n">
                    <div className="MuiTabs-scroller MuiTabs-fixed mui-18jpbi7" style={{ overflow: 'hidden', marginBottom: 0 }}>
                        <div className="MuiTabs-flexContainer mui-7sga7m" role="tablist">
                            {[0, 1, 2, 3, 4].map((index) => (
                                <button
                                    key={index}
                                    className={`MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary MuiTab-fullWidth ${tabValue === index ? 'Mui-selected' : ''
                                        } mui-1q5c5id`}
                                    tabIndex={index === 0 ? 0 : -1}
                                    type="button"
                                    role="tab"
                                    aria-selected={tabValue === index}
                                    id={`features-gallery-scrollable-force-tab-${index}`}
                                    aria-controls={`features-gallery-scrollable-force-tabpanel-${index}`}
                                    onClick={() => handleTabChange(index)}
                                >
                                    {index === 0 && 'Dashboard'}
                                    {index === 1 && 'Documents'}
                                    {index === 2 && 'Operations'}
                                    {index === 3 && 'Shareholders'}
                                    {index === 4 && 'Leaders'}
                                </button>
                            ))}
                        </div>
                        <span
                            className="MuiTabs-indicator mui-vqkcvs"
                            style={{ left: `${tabValue * 20}%`, width: '20%' }}
                        ></span>
                    </div>
                </div>
                <hr className="MuiDivider-root MuiDivider-fullWidth mui-14c1bos" />
                <div className="MuiBox-root mui-5vb4lz"></div>
                {[0, 1, 2, 3, 4].map((index) => (
                    <div
                        key={index}
                        className="MuiBox-root mui-moy5on"
                        role="tabpanel"
                        id={`features-gallery-scrollable-force-tabpanel-${index}`}
                        aria-labelledby={`features-gallery-scrollable-force-tab-${index}`}
                        hidden={tabValue !== index}
                    >
                        {index === 0 && (
                            <div className="MuiBox-root mui-1l4w6pd">
                                <h6 className="MuiTypography-root MuiTypography-subtitle1 mui-1qryofl">
                                    For each company you manage, find the main information at a glance
                                </h6>
                            </div>
                        )}
                        <div className="MuiBox-root mui-1yuhvjn"></div>
                        {index === 0 && (
                            <img
                                alt="dashboard"
                                loading="lazy"
                                width="953"
                                height="428"
                                decoding="async"
                                data-nimg="1"
                                style={{ color: 'transparent' }}
                                src={process.env.PUBLIC_URL + "/images/dashboard.svg"}
                            />
                        )}
                        {index === 1 && (
                            <div className="MuiBox-root mui-1l4w6pd">
                                <h6 className="MuiTypography-root MuiTypography-subtitle1 mui-1qryofl">
                                    Quickly find all your documents thanks to advanced search functions
                                </h6>
                            </div>
                        )}
                        <div className="MuiBox-root mui-1yuhvjn"></div>
                        {index === 1 && (
                            <img
                                alt="dashboard"
                                loading="lazy"
                                width="953"
                                height="428"
                                decoding="async"
                                data-nimg="1"
                                style={{ color: 'transparent' }}
                                src={process.env.PUBLIC_URL + "/images/dashboard_2.svg"}
                            />
                        )}
                        {index === 2 && (
                            <div className="MuiBox-root mui-1l4w6pd">
                                <h6 className="MuiTypography-root MuiTypography-subtitle1 mui-1qryofl">
                                    Consult the transaction history and find all associated documents
                                </h6>
                            </div>
                        )}
                        <div className="MuiBox-root mui-1yuhvjn"></div>
                        {index === 2 && (
                            <img
                                alt="dashboard"
                                loading="lazy"
                                width="953"
                                height="428"
                                decoding="async"
                                data-nimg="1"
                                style={{ color: 'transparent' }}
                                src={process.env.PUBLIC_URL + "/images/dashboard_3.svg"}
                            />
                        )}
                        {index === 3 && (
                            <div className="MuiBox-root mui-1l4w6pd">
                                <h6 className="MuiTypography-root MuiTypography-subtitle1 mui-1qryofl">
                                    Secure the maintenance of your shareholder register and the monitoring of your capitalization table
                                </h6>
                            </div>
                        )}
                        <div className="MuiBox-root mui-1yuhvjn"></div>
                        {index === 3 && (
                            <img
                                alt="dashboard"
                                loading="lazy"
                                width="953"
                                height="428"
                                decoding="async"
                                data-nimg="1"
                                style={{ color: 'transparent' }}
                                src={process.env.PUBLIC_URL + "/images/dashboard_4.svg"}
                            />
                        )}
                        {index === 4 && (
                            <div className="MuiBox-root mui-1l4w6pd">
                                <h6 className="MuiTypography-root MuiTypography-subtitle1 mui-1qryofl">
                                    Find information regarding your agents and their appointment documents
                                </h6>
                            </div>
                        )}
                        <div className="MuiBox-root mui-1yuhvjn"></div>
                        {index === 4 && (
                            <img
                                alt="dashboard"
                                loading="lazy"
                                width="953"
                                height="428"
                                decoding="async"
                                data-nimg="1"
                                style={{ color: 'transparent' }}
                                src={process.env.PUBLIC_URL + "/images/dashboard_5.svg"}
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DocumentOrganization;