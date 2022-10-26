import React from "react";
import "../../styles/cards.scss";
import Pattern1 from "../../images/main/cards/Pattern1.svg";
import Pattern2 from "../../images/main/cards/Pattern2.svg";
import errow from "../../images/header/errow.svg";

const Cards = () => {
  return (
    <section className="cards">
      <ul className="conteiner cards__conteiner">
        <li className="card">
          <div className="card__img">
            {" "}
            <img src={Pattern1} alt={Pattern1}></img>{" "}
          </div>
          <div className="card__text">
            <p className="card__text-description">Spot & Margin</p>
            <h4 className="card__text-title">
              Trade <span>200+</span> <br /> pairs with up <br /> to 10x
              leverage
            </h4>
            <a href="/" className="card__link">
              Learn more
            </a>
          </div>
        </li>
        <li className="card">
          <div className="card__text">
            <p className="card__text-description">Derivatives</p>
            <h4 className="card__text-title">
              40+ quarterly futures and contracts
            </h4>
            <a href="/" className="card__link">
              Learn more
            </a>
          </div>
        </li>
        <li className="card">
          <div className="card__text">
            <p className="card__text-description">Trading Arena</p>
            <h4 className="card__text-title">
              Prize pools worth up to USD 1,000,000
            </h4>
            <a href="#" className="card__link">
              Learn more
            </a>
          </div>
        </li>
        <li className="card">
          <div className="card__text">
            <p className="card__text-description">Spot & Margin</p>
            <h4 className="card__text-title">
              Trade <span>200+</span> <br /> pairs with up <br /> to 10x
              leverage
            </h4>
            <a href="/" className="card__link">
              Learn more
            </a>
          </div>
          <div className="card__img">
            {" "}
            <img src={Pattern2} alt={Pattern2}></img>{" "}
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Cards;
