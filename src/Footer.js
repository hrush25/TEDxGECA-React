import React from 'react';
import "./Footer.css";

function Footer() {
    return (
        <div className="footer">

        {/* Title - Let's Connect */}
        <div className="footer__title">
            <img src="letsConnect.svg" />
        </div>

        {/* 3 dots */}
        <div className="footer__horiDots">
            <img src="horiDotsTop.svg" />
        </div>

        {/* footer poster */}
        <div className="footer__poster">
            <img src="footerPoster.gif" />   
        </div>


        {/* Social media */}
            <div className="footer__social" >
                
                <div className="yt-icon">
                < img  id="yt" src="yt.svg" />
                </div>
                
                <div className="insta-icon" >
                < img src="insta.svg" />
                </div>
                
                <div className="fb-icon" >
                < img src="fb.svg" />
                </div>
                
                <div className="twit-icon"> 
                < img src="twitter.svg" />
                </div>

                <div className="email-icon">
                < img src="email.svg" /> 
                </div>
            </div>
        


        {/* footer tedx logo */}

        <div className="footer__logo">
            <img src="tedxLogo_footer.svg" />
        </div>
        


        {/* Footer XX design */}
        <div className="footer__designXX">
            <img src="footerXX.svg" />
        </div>
        
        {/* Footer Menu */}
        <div className="footer__menu">
        <ul className="ul">
        <li className="li">About</li>
        <li className="li">Speakers</li>
        <li className="li">Team</li>
        <li className="li">Contact</li>
      </ul>
    </div>

        {/* Footer Copyright */}
        <div className="footer__copyright" >
            <p>
            ©Copyright TEDxGECA 2021 all rights reserved.
This independent TEDx event is operated under license from TED.
            </p>
        </div>
            
        </div>
    )
}

export default Footer;
