import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { NavLinks } from "../../organisms/NavLinks";
import logo from "../../assets/GPT-3.svg";
import "./navbar.scss";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenuHandler = () => {
    setShowMenu((prevMenu) => !prevMenu);
  };

  return (
    <div className="navbar__container">
      <div className="navbar__links">
        <div className="navbar__links--logo">
          <img src={logo} alt="gpt3 logo" />
        </div>
        <div className="navbar__links--container">
          <NavLinks />
        </div>
      </div>
      <div className="navbar__sign">
        <p>Sign In</p>
        <button className="navbar__sign--up">Sign up</button>
      </div>
      <div className="navbar--menu">
        {showMenu ? (
          <RiCloseLine color="#fff" size={27} onClick={toggleMenuHandler} />
        ) : (
          <RiMenu3Line color="#fff" size={27} onClick={toggleMenuHandler} />
        )}

        {showMenu && (
          <div className="navbar__menu-container">
            <div className="navbar__menu-container-links scale-up-center">
              <NavLinks />
              <div className="navbar__menu-container-links-sign">
                <p>Sign In</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
