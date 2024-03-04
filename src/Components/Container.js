import React from 'react';
import './css/Container.css';
import Navbar from './Navbar';
import Infobanner from './Infobanner';
import Clients from './Clients';
import HowItWorks from './HowItWorks';
import PlatformInfo from './PlatformInfo';
import Testimonials from './Testimonials';

const Container = () => {
    return (
        <div className="MuiBox-root mui-152agi9" data-testid="HomePage">
            <Navbar />
            <Infobanner />
            <Clients />
            <HowItWorks />
            <PlatformInfo />
            <Testimonials />
        </div>
    );
};

export default Container;