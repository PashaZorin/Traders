import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import C from "../../images/header/C.png";
import "../../styles/header.scss";
import Meet from "./Meet";
import Errow from "../Errow";

const Header = () => {
  const [menuMobIsActive, setMenuMobIsActive] = useState(false);
  const navItems = [
    { text: "Activities", toId: "meet" },
    { text: "Technology", toId: "technologies" },
    { text: "R&D", toId: "future" },
    { text: "Community", toId: "cards" },
  ];
  useEffect(() => {
    console.log(window.innerWidth);
    if (window.innerWidth < 768) {
      menuMobIsActive
        ? (document.body.style.overflow = "hidden")
        : (document.body.style.overflow = "auto");
    }
  }, [menuMobIsActive]);
  const toggleMenu = (e) => {
    console.log("toggleMenu", "toggleMenu");
    setMenuMobIsActive(!menuMobIsActive);
  };
  const timeoutToggleMenu = () => {
    setTimeout(() => {
      toggleMenu();
    }, 400);
  };

  return (
    <header className="header" onClick={() => menuMobIsActive && toggleMenu()}>
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
                  onClick={timeoutToggleMenu}
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
