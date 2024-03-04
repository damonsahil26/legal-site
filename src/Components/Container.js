import React from 'react';
import './css/Container.css';
import Navbar from './Navbar';
import Infobanner from './Infobanner';
import Clients from './Clients';

const Container = () => {
    return (
        <div class="MuiBox-root mui-152agi9" data-testid="HomePage">
            <Navbar />
            <Infobanner />
            <Clients />
        </div>
    );
};

export default Container;