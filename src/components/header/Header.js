import React, { useState } from "react";
import { Link } from "react-scroll";
import C from "../../images/header/C.png";
import "../../styles/header.scss";
import Meet from "./Meet";
import Errow from "../Errow";

const Header = () => {
  const [menuMobIsActive, setMenuMobIsActive] = useState(false);
  const toggleMenu = () => {
    setMenuMobIsActive(!menuMobIsActive);
  };
  console.log(menuMobIsActive);
  const navItems = [
    { text: "Activities", toId: "meet" },
    { text: "Technology", toId: "technologies" },
    { text: "R&D", toId: "future" },
    { text: "Community", toId: "cards" },
  ];

  return (
    <header className="header">
      <menu className="header__menu conteiner">
        <div className="header__logo">
          <img src={C} alt="logo" />
        </div>
        <ul
          className={`header__menu-list
       ${menuMobIsActive ? "active" : ""}  `}
        >
          {navItems.map((item) => {
            return (
              <li key={item.text}>
                <Link
                  to={item.toId}
                  spy={true}
                  smooth={true}
                  className="hvr-underline-from-left"
                >
                  {item.text}
                </Link>
              </li>
            );
          })}
          <li>
            <Link
              to="technologies"
              spy={true}
              smooth={true}
              className="header__menu-btn hvr-sweep-to-top"
            >
              Career <Errow />
            </Link>
          </li>
        </ul>
        <div
          className={`header__lines-btn
           ${menuMobIsActive ? "active" : ""}  `}
          onClick={toggleMenu}
        ></div>
      </menu>
      <Meet />
    </header>
  );
};

export default Header;
