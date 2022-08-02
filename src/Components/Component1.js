// RENDERS NAVIGATION BAR AND HAMBURGER ICON

import React from 'react';
var x = document.getElementById("myLinks");
export default function Component1() {
  return (
    <div className="nav-bar" id="glass">
    <div className="container flex">
      <h1>HER-O</h1>
      <nav id="myLinks">
        <ul>
          <li><a href="#come-here">HOME</a></li>
          <li><a href="#SV">ABOUT HER-O</a></li>
          <li><a href="#abilities">ABILITIES</a></li>
          <li><a href="#about">ABOUT US</a></li>
          {/* <li><a href="#duty">OUR COMPLIANCE</a></li> */}
        </ul>
      </nav>
    </div>
        <a className="icon" onClick={window['myFunction']}><i className="fa fa-bars" ></i></a>     
  </div>
  
  );
}