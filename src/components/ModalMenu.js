import React from "react";
import "./Header.css";
import "./ModalMenu.css";

function ModalMenu(props) {
  return (
    <div className="header__modal">
    <div className="list">
      <ul className="ul">
        <li className="li">About</li>
        <li className="li">Speakers</li>
        <li className="li">Team</li>
        <li className="li">Contact</li>
        
      <img className="modal__redDivider" src="redDivider.svg" />

      </ul>

      </div>
    </div>
  );
} 

export default ModalMenu;
