import React from 'react';

import Footer from '../Shared/Footer';
import TermNav from '../TermNav/TermNav';
// import NavBar from '../Shared/NavBar/N?avBar';
import TermOfUse from './TermOfUse';

const TermOfUseMain = () => {
    return (
        <div>
            <TermNav />
            <TermOfUse />
            <Footer />
        </div>
    );
};

export default TermOfUseMain;