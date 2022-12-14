import React from "react";
import "../../styles/meet.scss";
import VectorArrow from "../../images/main/meet/VectorArrow.png";
import { Link } from "react-scroll";

const Meet = () => {
  return (
    <section className="meet" id="meet">
      <div className=" meet__container">
        <div className="meet__text">
          <p className="meet__text-decoration">crypto trading</p>
          <h1 className="meet__text-title">
            Engineers Meet <span>Traders</span>
          </h1>
          <p className="meet__text-subtitle">
            Advanced crypto algorithmic trading and efficient cross-chain
            execution, at scale.
          </p>
          <Link
            to="future"
            spy={true}
            smooth={true}
            className="meet__button mob hvr-sweep-to-right"
          >
            Learn More <img src={VectorArrow} alt={VectorArrow} />
          </Link>
        </div>
        <div className="meet__buttons-group"></div>
      </div>
      <Link
        to="future"
        spy={true}
        smooth={true}
        className="meet__button desk hvr-sweep-to-right"
      >
        Learn More <img src={VectorArrow} alt={VectorArrow} />
      </Link>
    </section>
  );
};

export default Meet;
