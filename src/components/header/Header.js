import React, { useState } from "react";
import { Link } from "react-scroll";
import C from "../../images/header/C.png";
import "../../styles/header.scss";
import shape from "../../images/header/shape.png";
import Meet from "./Meet";

const Header = () => {
  const [menuMobIsActive, setMenuMobIsActive] = useState(false);
  const toggleMenu = () => {
    setMenuMobIsActive(!menuMobIsActive);
  };
  console.log(menuMobIsActive);
  const navItems = [
    { text: "Activities", toId: "#" },
    { text: "Technology", toId: "#" },
    { text: "R&D", toId: "#" },
    { text: "Community", toId: "#" },
  ];

  return (
    <header className="header">
      <menu className="header__menu conteiner">
        <div className="header__logo">
          <img src={C} alt="logo" />
        </div>
        <ul
          className={`header__menu-list
       ${menuMobIsActive && "active"}  `}
        >
          {navItems.map((item) => {
            return (
              <li key={item.text}>
                <Link to={item.toId}>{item.text}</Link>
              </li>
            );
          })}
          <li>
            <button className="header__menu-btn">
              Career <img src={shape} alt="shape"></img>
            </button>
          </li>
        </ul>
        <div
          className={`header__lines-btn
           ${menuMobIsActive && "active"}  `}
          onClick={toggleMenu}
        ></div>
      </menu>
      <Meet />
    </header>
  );
};

export default Header;
