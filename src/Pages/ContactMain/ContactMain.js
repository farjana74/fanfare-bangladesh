import React from 'react';

import Contact from '../ContactBanner/Contact';
import ContactSection from '../ContactSection/ContactSection';
import Footer from '../Shared/Footer';

const ContactMain = () => {
    return (
        <div>
            <Contact />
            <ContactSection />
            <Footer />
            {/* <footer /> */}
        </div>
    );
};

export default ContactMain;