import React from 'react';

import TermOfFooter from '../Shared/TermOfFooter/TermOfFooter';
import TermNav from '../TermNav/TermNav';
// import NavBar from '../Shared/NavBar/N?avBar';
import TermOfUse from './TermOfUse';

const TermOfUseMain = () => {
    return (
        <div>
            <TermNav />
            <TermOfUse />
            <TermOfFooter />
        </div>
    );
};

export default TermOfUseMain;