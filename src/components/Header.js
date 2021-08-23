import React, {useState} from 'react'
import "./Header.css"
import { Button, Col, Modal, Row } from "react-bootstrap";
import ModalMenu from "./ModalMenu";
import Group17 from "../svgs/Group 17.svg";
import Group8 from "../svgs/Group 8.svg";
import Rectangle59 from "../svgs/Rectangle 59.svg";
import Explore from "../svgs/EXPLORE.svg";
import X from "../svgs/X.svg";
import Group16 from "../svgs/Group 16.svg";
import Line3 from "../svgs/Line 3.svg";
import Line4 from "../svgs/Line 4.svg";
import Line5 from "../svgs/Line 5.svg";
import Ellipse201 from "../svgs/Ellipse 201.svg";
import Ellipse202 from "../svgs/Ellipse 202.svg";
import Ellipse203 from "../svgs/Ellipse 203.svg";
import Ellipse204 from "../svgs/Ellipse 204.svg";

function Header(props) {
  const [modalShow, setModalShow] = React.useState(false);
  //   const [fullscreen, setFullscreen] = useState(true);
  const handleShow = () => {
    // setFullscreen(true);
    setModalShow(true);
  };
    return (
            <div className="header">
                   
                   {/* Logo */}
                   <div className='tedx__logo'>              
                   <img src='tedx-logo.svg'></img>
                   </div>

                {/* Hamberger icon */}

      <div>
      {/* <img src={Group17} className="Group17" onClick={() => handleShow()} /> */}
      <img src="Hamburger-icon.svg" className="ham-icon"  onClick={() => handleShow()}/>


      <Modal
        show={modalShow}
        size="lg"
        dialogClassName="modal-90w"
        onHide={() => setModalShow(false)}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Row className="content">
            <Col lg={6} sm={6} xs={6}>
              <img src={Group8} className="Group8" />
              <img src={Rectangle59} className="Rectangle59" />
              <img src={Explore} className="Explore" />
              <img src={X} className="X" />
              <img src={Group16} className="Group16" />
              <img src={Line3} className="Line3" />
              <img src={Line4} className="Line4" />
              <img src={Line5} className="Line5" />
              <img src={Ellipse201} className="Ellipse201" />
              <img src={Ellipse202} className="Ellipse202" />
              <img src={Ellipse203} className="Ellipse203" />
              <img src={Ellipse204} className="Ellipse204" />
            </Col>
            <Col lg={6} sm={6} xs={6}>
              <ModalMenu />
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </div>
            </div>
    
       

    );
}

export default Header;
