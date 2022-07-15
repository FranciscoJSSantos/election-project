import React from 'react';
import './Footer.css';

export default function Footer(){
  return(
    <footer>
        <div className="footer-bottom">
          <p>copyright &copy;2022 All Rights Reserved by <a href="">Francisco José</a></p>
          <div className="socials">
            <a href="https://github.com/FranciscoJSSantos" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a>
            <a href="https://www.linkedin.com/in/francisco-josé-04310a1a2/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin-in"></i></a>
          </div>
        </div>
    </footer>
  )
}