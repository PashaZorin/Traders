import React from "react";
import "../../styles/meet.scss";
import VectorErrow from "../../images/header/meet/VectorErrow.png";

const Meet = () => {
  return (
    <section className="meet">
      <div className=" meet__conteiner">
        <div className="meet__text">
          <p className="meet__text-decoration">crypto trading</p>
          <h1 className="meet__text-title">
            Engineers Meet <span>Traders</span>
          </h1>
          <p className="meet__text-subtitle">
            Advanced crypto algorithmic trading and efficient cross-chain
            execution, at scale.
          </p>
          <button className="meet__button mob hvr-sweep-to-right">
            Learn More <img src={VectorErrow} alt={VectorErrow} />
          </button>
        </div>
        <div className="meet__buttons-group"></div>
      </div>
      <button className="meet__button desk hvr-sweep-to-right">
        Learn More <img src={VectorErrow} alt={VectorErrow} />
      </button>
    </section>
  );
};

export default Meet;
