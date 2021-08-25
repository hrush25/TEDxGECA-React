import './Contact.css';
import Header from "./Header";

const Contact = () => {
    return (

        <div className="contact">
            <Header />
            <div >
                <h1 className="headerr">TEDxGECA</h1>
            </div>
            <div className="detail">
                <p> <b>Address:</b>  Government College Of Engineering
                        Railway Station Road,   
                        Aurangabad
                        Maharashtra,
                        India - 431005.
                </p>
                <p><b>Phone:</b>    Chetan Chavan - (+91) 8329313276 | Akshita Sinha - (+91) 9145104585</p>
                <p><b>Email:</b>    <a href="mailto:contactus@tedxgeca.com">contactus@tedxgeca.com </a> </p>
            </div>
            {/* Social media */}
            <div className="footer__sociall" >
s
                <div className="yt-iconn">
                    <a href="https://www.youtube.com/channel/UCdIM4cz9eGAA7djeGymxm8g">
                        < img id="yt" src="youtubee.png" />
                    </a>
                </div>

                <div className="insta-iconn" >
                    <a href="https://instagram.com/tedxgeca?utm_medium=copy_link">
                        <img src="instagram.png" />
                    </a>
                </div>

                <div className="fb-iconn" >
                    <a href="https://www.facebook.com/TEDx-GECA-115779977389422">
                        < img src="facebook.png" />
                    </a>
                </div>

                <div className="twit-iconn">
                    <a href="https://mobile.twitter.com/TEDxGECA">
                        < img src="twitter.png" />
                    </a>
                </div>

            </div>


            <div className="footer__copyrightt" >
                <p>
                    ©Copyright TEDxGECA 2021 all rights reserved.
                    
                </p>
                <p>This independent TEDx event is operated under license from TED.</p>
            </div>

        </div>

    );
};

export default Contact;