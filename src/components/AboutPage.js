import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Header from "./Header";
import Footer from "../Footer";
import "./AboutPage.css";

function AboutUs(props) {
  return (
    <div>
      <Header />
      <Row className="content">
        <Col lg={6}>
          <h1 className="headline">About Us</h1>
          <p class="content-info">
            Introducing to you all the most enchanting, ecstatic and exceptional
            TED event For the very first time, here we are Introducing TED to
            the GECA as TEDxGECA.
            <br />
            TEDxGECA is coming up with a palate full of unmatched expertise
            speakers in their respective field. TEDxGECA will surely act as an
            intriguing platform to explore non- conventional spaces and also to
            share ideas that will bring people together, this self- organized
            event will indulge you with deep discussion with speakers sharing
            their unraveled journey and insights.
            <br></br>
            Theme of our event - "Opportunity in Adversity", appropriately
            emphasizes the present scenario of pandemic that we're trying to
            mitigate. But TEDxGEGA has emerged as a beacon light to create
            opportunity amidst this atmosphere full of adversities.
          </p>
        </Col>
        <Col lg={6}>
          <iframe
            className="tedx-iframe"
            src="https://www.youtube.com/embed/d0NHOpeczUU"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen=""
          ></iframe>
        </Col>

        <Row className="containers">
          <h1 className="title">
            TED<sup>x</sup>
          </h1>
          <p class="content-info">
            TED is a nonprofit organization devoted to Ideas Worth Spreading.
            Started as a four-day conference in California 30 years ago, TED has
            grown to support its mission with multiple initiatives. The two
            annual TED Conferences invite the world’s leading thinkers and doers
            to speak for 18 minutes or less. Many of these talks are then made
            available, free, at TED.com. TED speakers have included Bill Gates,
            Jane Goodall, Elizabeth Gilbert, Sir Richard Branson, Nandan
            Nilekani, Philippe Starck, Ngozi Okonjo-Iweala, Sal Khan and Daniel
            Kahneman.
          </p>
        </Row>
        <Row className="containers">
          <h1 className="title">About TEDx</h1>
          <p class="content-info">
          In the spirit of ideas worth spreading, TED has created a program
            called TEDx. TEDx is a program of local, self-organized events that
            bring people together to share a TED-like experience. Our event is
            called TEDxGECA, where x = independently organized TED event. At our
            TEDxGECA event, TEDTalks video and live speakers will combine to
            spark deep discussion and connection in a small group. The TED
            Conference provides general guidance for the TEDx program, but
            individual TEDx events, including ours, are self-organized.
            x = independently organized event About TEDx, x = independently
            organized event In the spirit of ideas worth spreading, TEDx is a
            program of local, self-organized events that bring people together
            to share a TED-like experience. At a TEDx event, TED Talks video and
            live speakers combine to spark deep discussion and connection. These
            local, self-organized events are branded TEDx, where x =
            independently organized TED event. The TED Conference provides
            general guidance for the TEDx program, but individual TEDx events
            are self-organized. (Subject to certain rules and regulations.)
          </p>
        </Row>
        <Row className="containers">
          <h1 className="title">About TED</h1>
          <p class="content-info">
            TED is a nonprofit organization devoted to Ideas Worth Spreading.
            Started as a four-day conference in California 30 years ago, TED has
            grown to support its mission with multiple initiatives. The two
            annual TED Conferences invite the world’s leading thinkers and doers
            to speak for 18 minutes or less. Many of these talks are then made
            available, free, at TED.com. TED speakers have included Bill Gates,
            Jane Goodall, Elizabeth Gilbert, Sir Richard Branson, Nandan
            Nilekani, Philippe Starck, Ngozi Okonjo-Iweala, Sal Khan and Daniel
            Kahneman. The annual TED Conference takes place each spring in
            Vancouver, British Columbia. TED’s media initiatives include
            TED.com, where new TED Talks are posted daily; the Open Translation
            Project, which provides subtitles and interactive transcripts as
            well as translations from volunteers worldwide; the educational
            initiative TED-Ed. TED has established the annual TED Prize, where
            exceptional individuals with a wish to change the world get help
            translating their wishes into action; TEDx, which supports
            individuals or groups in hosting local, self- organized TED-style
            events around the world, and the TED Fellows program, helping
            world-changing innovators from around the globe to amplify the
            impact of their remarkable projects and activities.
            
          </p>
          <p>Follow TED on Twitter at 
            <a href="http://twitter.com/TEDTalks">
            <strong> http://twitter.com/TEDTalks </strong></a>, or on Facebook at  <a href="http://www.facebook.com/TED"> <strong>http://www.facebook.com/TED.</strong> </a>
            
          </p>
        </Row>
      </Row>
      <Footer />
    </div>
  );
}

export default AboutUs;
