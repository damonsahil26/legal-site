import React from 'react';
import './css/CreateCompany.css';

const CreateCompany = () => {
    return (
        <div className="MuiContainer-root MuiContainer-maxWidthMd mui-1c0cfyw">
            <div className="MuiBox-root mui-17973yi">
                <h2 className="MuiTypography-root MuiTypography-h4 MuiTypography-gutterBottom mui-1u552ct">
                    <span style={{ verticalAlign: 'inherit' }}>
                        <span style={{ verticalAlign: 'inherit' }}>Create or add your company</span>
                    </span>
                </h2>
                <div role="group" className="MuiToggleButtonGroup-root mui-mdpfwa" aria-label="">
                    <button
                        className="MuiButtonBase-root MuiToggleButtonGroup-grouped MuiToggleButtonGroup-groupedHorizontal MuiToggleButton-root Mui-selected MuiToggleButton-sizeMedium MuiToggleButton-standard MuiToggleButtonGroup-grouped MuiToggleButtonGroup-groupedHorizontal MuiToggleButtonGroup-firstButton mui-8rspzv"
                        tabIndex="0" type="button" value="creation" aria-pressed="true" aria-label="creation">
                        <span style={{ verticalAlign: 'inherit' }}>
                            <span style={{ verticalAlign: 'inherit' }}>I want to start my business</span>
                        </span>
                        <span className="MuiTouchRipple-root mui-w0pj6f"></span>
                    </button>
                    <button
                        className="MuiButtonBase-root MuiToggleButtonGroup-grouped MuiToggleButtonGroup-groupedHorizontal MuiToggleButton-root MuiToggleButton-sizeMedium MuiToggleButton-standard MuiToggleButtonGroup-grouped MuiToggleButtonGroup-groupedHorizontal MuiToggleButtonGroup-lastButton mui-8rspzv"
                        tabIndex="0" type="button" value="addition" aria-pressed="false" aria-label="addition">
                        <span style={{ verticalAlign: 'inherit' }}>
                            <span style={{ verticalAlign: 'inherit' }}>I have already created my business</span>
                        </span>
                        <span className="MuiTouchRipple-root mui-w0pj6f"></span>
                    </button>
                </div>
                <div className="MuiBox-root mui-1kzgsd1">
                    <h6 className="MuiTypography-root MuiTypography-subtitle1 MuiTypography-gutterBottom mui-wuzyv">
                        <span style={{ verticalAlign: 'inherit' }}>
                            <span style={{ verticalAlign: 'inherit' }}>You can use Alex to create a company, we manage all the formalities and legal publications. </span>
                            <span style={{ verticalAlign: 'inherit' }}>Your Kbis is available within 48 hours after receipt of the deposit certificate.</span>
                        </span>
                    </h6>
                    <h6 className="MuiTypography-root MuiTypography-subtitle1 MuiTypography-gutterBottom mui-wuzyv">
                        <span style={{ verticalAlign: 'inherit' }}>
                            <span style={{ verticalAlign: 'inherit' }}>All your documents are then available on the platform.</span>
                        </span>
                    </h6>
                    <a className="MuiTypography-root MuiTypography-subtitle1 MuiTypography-gutterBottom MuiLink-root MuiLink-underlineAlways mui-ownv45" href="/creer-ma-societe">
                        <span style={{ verticalAlign: 'inherit' }}>
                            <span style={{ verticalAlign: 'inherit' }}>Learn more about creating a company &gt;</span>
                        </span>
                    </a>
                </div>
                <a className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineNone MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium mui-bw52vx" tabIndex="0" href="/creation-societe">
                    <span style={{ verticalAlign: 'inherit' }}>
                        <span style={{ verticalAlign: 'inherit' }}>Create my company</span>
                    </span>
                    <span className="MuiTouchRipple-root mui-w0pj6f"></span>
                </a>
            </div>
        </div>
    );
}

export default CreateCompany;