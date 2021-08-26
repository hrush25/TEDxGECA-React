import React from "react";
import "./Header.css";
import "./ModalMenu.css";
import { NavLink } from "react-router-dom";
import { useEffect } from 'react'

function ModalMenu(props) {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="header__modal">
      <div className="list">
        <ul className="ul">
          <li className="li">
            <NavLink exact to="/">
              <button type="submit" className="btnn">
                Home
              </button>
            </NavLink>

          </li>
          <li className="li">
            <NavLink exact to="/about">
              <button type="submit" className="btnn">
                About
              </button>
            </NavLink>

          </li>
          <li className="li">
            <NavLink exact to="/contact">
              <button type="submit" className="btnn">
                Contact
              </button>
            </NavLink>

          </li>
          <li className="li">
            <NavLink exact to="/">
              <button type="submit" className="btnn">
                Speakers
              </button>
            </NavLink>

          </li>

          <img className="modal__redDivider" src="redDivider.svg" />

        </ul>

      </div>
    </div>
  );
}

export default ModalMenu;
