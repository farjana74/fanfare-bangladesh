import './Footer.css';

import React from 'react';

import {
  BsFacebook,
  BsYoutube,
} from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='container-fluid footer-bg'>
           <div class="container footer-contain">
  <div class="row row-cols-1 row-cols-lg-4 g-2 g-lg-4">
    <div class="col">
      <div>
        <h1 className='footer-title pb-3'>Download the App</h1>
       <a href="https://play.google.com/store/apps/details?id=com.fanfare.android"> <img className='w-50' src="https://i0.wp.com/fanfare.global/wp-content/uploads/2019/09/google_play.png" alt="" /></a>
        <div className='pt-2'>
        <a href="https://apps.apple.com/us/app/fanfare-reward-your-fans/id1204084320"><img className='w-50' src="https://i0.wp.com/fanfare.global/wp-content/uploads/2019/09/apple_store.png" alt="" /></a>
        </div>
      </div>
    </div>
    <div class="col">
      <div>
      <h1 className='footer-title pb-3'>Company</h1>
      <div>
        <ul className='type'>
            <li><a  href="/">Home</a></li>
            <li><Link to="/">Contact</Link></li>
            
        </ul>
      </div>

      </div>
    </div>
    <div class="col">
      <div>
        <h1 className='footer-title pb-3'>Others</h1></div>
        <div>
        <ul className='type'>
            <li><Link to="/privacypolicy">Privacy Policy</Link></li>
            <li><Link to="/termofuse">Terms of Use</Link></li>
            
           
        </ul>
      </div>
    </div>
    <div class="col">
      <div>
        <h1 className='footer-title pb-3'>Our Community</h1>
        
        <a href="https://www.facebook.com/FanfareBD"><BsFacebook   className='footer-icon'/></a> <a href="https://www.youtube.com/channel/UCSCBEZILCFwdBlX4M2RQN8w"><BsYoutube   className='footer-icon' /></a> 
        
        
        </div>
    </div>
   
    
    
  </div>
</div>


<div>
<h6 className='text-center footer-last'>Copyright 2020 Fanfare Bangladesh Ltd</h6>
</div>      
        </div>
    );
};

export default Footer;