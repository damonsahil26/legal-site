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
import ContactForm from './ContactForm';
import Footer from './Footer';

const Homepage = () => {
    return (
        <div className="MuiBox-root mui-152agi9" data-testid="HomePage">
            <Navbar />
            <Infobanner />
            <Clients />
            <HowItWorks />
            <PlatformInfo />
            <CreateCompany />
            <DocumentOrganization />
            <WhyChoose />
            <SupportUs />
            <ContactForm />
            <Footer />
        </div>
    );
};

export default Homepage;