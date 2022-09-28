import React from 'react';

import Footer from '../Shared/Footer';
import NavBar from '../Shared/NavBar/NavBar';
import PrivacyPolicy from './PrivacyPolicy';

const PrivacyPolicyMain = () => {
    return (
        <div>
            <NavBar />
            <PrivacyPolicy />
            <Footer />
        </div>
    );
};

export default PrivacyPolicyMain;