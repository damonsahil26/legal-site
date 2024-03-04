import React from 'react';
import './css/Container.css';
import Navbar from './Navbar';
import Infobanner from './Infobanner';
import Clients from './Clients';
import HowItWorks from './HowItWorks';
import PlatformInfo from './PlatformInfo';
import CreateCompany from './CreateCompany';
import DocumentOrganization from './DocumentOrganization';
import WhyChoose from './WhyChoose';
import SupportUs from './SupportUs';

const Homepage = () => {
    return (
        <div class="MuiBox-root mui-152agi9" data-testid="HomePage">
            <Navbar />
            <Infobanner />
            <Clients />
            <HowItWorks />
            <PlatformInfo />
            <CreateCompany />
            <DocumentOrganization />
            <WhyChoose />
            <SupportUs />
        </div>
    );
};

export default Homepage;