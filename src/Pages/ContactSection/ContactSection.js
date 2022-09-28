import './ContactSection.css';

import React from 'react';

import {
  AiOutlineHome,
  AiOutlineLink,
  AiOutlineMail,
} from 'react-icons/ai';

const ContactSection = () => {
    return (
        <div className='container-fluid  section-bg'>
            <div className='container'>
                <h1 className='section-title py-5'>FEEL FREE TO CONTACT US</h1>


<div class="row gx-5 pb-5">
    <div class="col">
     <div>

     <h1 className='branch-title'>
    SINGAPORE (HQ)

    </h1>
<p className='branch-address pt-4 pb-3'> <AiOutlineHome className='address-icon mb-1' />  10 Anson Road, International Plaza, #22-03A, Singapore 079903</p>

{/* <h6 className='branch-number '><MdCall  className='address-icon mb-1' /> +65 6327 2990</h6> */}
<a className='list-unstyled' href="mailto:admin@fanfare.com.bd"><p className='feedback-mail '> <AiOutlineMail  className='address-icon mb-1' />   admin@fanfare.com.bd</p></a>
<a className='feedback-mail text-center' href="https://fanfare.com.bd/"><p> <AiOutlineLink  className='address-icon mb-1' /> fanfare.com.bd</p></a>



     </div>
    </div>
    <div class="col">
      <div>
      <h1 className=' branch-title'>BANGLADESH</h1>
    <p  className='branch-address pt-4 pb-3'>  <AiOutlineHome className='address-icon mb-1' />  51 Satmasjid Road Dhanmondi, Dhaka 1209</p>
    <a className='feedback-mail text-center' href="mailto:admin@fanfare.com.bd"><p><AiOutlineMail  className='address-icon mb-1' />    admin@fanfare.com.bd</p></a>

   
      </div>
    </div>
  </div>

            </div>
            
        </div>
    );
};

export default ContactSection;