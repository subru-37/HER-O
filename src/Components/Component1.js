import React from 'react';

export default function Component1() {
  return (
    <div className="nav-bar" id="glass">
    <div className="container flex">
      <h1>HER-O</h1>
      <nav id="myLinks">
        <ul>
          <li><a href="#come-here">HOME</a></li>
          <li><a href="#about">ABOUT US</a></li>
          <li><a href="#duty">OUR COMPLIANCE</a></li>
        </ul>
      </nav>
    </div>
        <a href="javascript:void(0);" className="icon" onClick={window['myFunction']}><i class="fa fa-bars"></i></a>
        
  </div>
  
  );
}