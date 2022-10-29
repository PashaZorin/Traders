import React from "react";
import "../../styles/cards.scss";

const Cards = () => {
  return (
    <section className="cards">
      <ul className="conteiner cards__conteiner">
        <li className="card hvr-grow-shadow">
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
        <li className="card hvr-grow-shadow">
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
        <li className="card hvr-grow-shadow">
          <div className="card__text">
            <p className="card__text-description">Trading Arena</p>
            <h4 className="card__text-title">
              Prize pools <br /> worth up to <br /> USD 1,000,000
            </h4>
            <a href="/" className="card__link">
              Learn more
            </a>
          </div>
        </li>
        <li className="card hvr-grow-shadow">
          <div className="card__text">
            <p className="card__text-description">mobile app</p>
            <h4 className="card__text-title">
              Trade anytime,
              <br /> anywhere
            </h4>
            <a href="/" className="card__link">
              Learn more
            </a>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Cards;
