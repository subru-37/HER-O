import React from 'react';

export default function Componentf() {
  return (
    <div>
        <footer>
            <div className="footer-content">
                <h1>HER-O</h1>
                <p style={{textAlign:"center"}}>THIS SITE IS A RESPONSE SYSTEM AND IS SUPPOSED TO BE USED FOR EMERGENCY ONLY</p>
                    <ul className="social-links">
                        <li><a href="#"><i className="fa-solid fa-phone size"></i></a></li>
                        <li><a href="#"><i className="fa-brands fa-instagram size"></i></a></li> 
                        <li><a href="#"><i className="fa-solid fa-envelope size"></i></a></li>
                    </ul>
            </div>
            <div className="footer-bottom">
                <p>copyright &copy;2022 HER-O</p>
            </div>
        </footer>
  </div>
  
  );
}