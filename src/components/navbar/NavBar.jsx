import React, { useState } from "react";
import "./navbar.scss";
import logo from "../../assets/GPT-3.svg";
import NavLinks from "../../organisms/NavLinks";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";

const NavBar = () => {
  const [showButton, setShowButton] = useState(false);
  const handleButtonToggle = () => {
    setShowButton((prevState) => !prevState);
  };

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="gpt3 logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <NavLinks />
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign In</p>
        <button type="button">Sign Up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {showButton ? (
          <RiCloseLine size={27} color={"#fff"} onClick={handleButtonToggle} />
        ) : (
          <RiMenu3Line size={27} color={"#fff"} onClick={handleButtonToggle} />
        )}
        {showButton && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <NavLinks />
            </div>

            <div className="gpt3__navbar-menu_container-links-sign">
              <p>Sign In</p>
              <button type="button">Sign Up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
