import './TermNav.css';

import React from 'react';

import { AiOutlineRight } from 'react-icons/ai';

import logo from '../../images/fanfare_logo_full_color_white_text_2x.png';

const TermNav = () => {
    return (
        <div className='container-fluid py-3'>
        <nav className="navbar navbar-expand-lg navbar-light ">
<div className="container-fluid">
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
<div>

{/* <image  alt="" title="" width="152px" height="30px"  src={logo} /> */}
<img width="152px" height="30px"  src={logo} alt="" />
</div>

<div className="collapse navbar-collapse pt-2" id="navbarTogglerDemo01">

  <ul className=" mx-auto mb-2 mb-lg-0  ">
  <div>
  <h1 className="navTitle fst-italic">Term Of Use</h1>
  </div>
    <div className='navbar-nav ms-2'>
    <li className="nav-item  ">
      <a className="navigation nav-link"aria-current="/#" >Home</a>
    </li>
    <li className="nav-item  ">
      <a className="{style.navigation nav-link"aria-current="page" href="/"><AiOutlineRight className='text-white' /></a>
    </li>
    <li className="nav-item">
      <a className="navigation nav-link" >Term Of Use</a>
    </li>
   
    </div>
  </ul>
  
</div>

<div>
<h2 className="hide">jdfdsjbh</h2>
</div>
</div>
</nav>
        
    </div>
    );
};

export default TermNav;