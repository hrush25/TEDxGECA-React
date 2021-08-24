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
                <a href="https://www.youtube.com/channel/UCdIM4cz9eGAA7djeGymxm8g"> 
                < img  id="yt" src="yt.svg" />
                </a>
                </div>
                
                <div className="insta-icon" >
                <a href="https://instagram.com/tedxgeca?utm_medium=copy_link">
                < img src="insta.svg" />
                </a>
                </div>
                
                <div className="fb-icon" >
                <a href="https://www.facebook.com/TEDx-GECA-115779977389422">
                < img src="fb.svg" />
                </a>
                </div>
                
                <div className="twit-icon"> 
                <a href="https://mobile.twitter.com/TEDxGECA">
                < img src="twitter.svg" />
                </a>
                </div>

                <div className="email-icon">
                <a href="mailto:contactus@tedxgeca.com">
                < img src="email.svg" />
                </a> 
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
        <li className="li li-about">About</li>
        <li className="li li-speakers">Speakers</li>
        <li className="li li-team">Team</li>
        <li className="li li-contact">Contact</li>
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
