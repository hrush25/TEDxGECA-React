import classes from "./About.module.css";
import Poster from "./Poster";

const About = () => {
    return (
        <div className={classes.container}>
            
            {/* Title */}
            <div className={classes.title}>
                <h4>About Event</h4>
            </div>

            <div>
                {/* Paragraph */}
                <div className={classes.para}>
                    <p>
                        Introducing to you all the most enchanting, ecstatic and exceptional TED event For the very first time,
                        here we are Introducing TED to the GECA as TEDxGECA.
                    </p>
                    <p>
                        TEDxGECA is coming up with a palate full of unmatched expertise speakers in their respective field.
                        TEDxGECA will surely act as an intriguing platform to explore non- conventional spaces and also to
                        share ideas that will bring people together, this self- organized event will indulge you with deep
                        discussion with speakers sharing their unraveled journey and insights.
                    </p>
                </div>

                {/* Button */}
                <div>
                    <button className={classes.btn}>Know Theme</button>
                </div>
            </div>

            <Poster />

            {/* Poster */}
            
                
        </div>
    );
};

export default About;