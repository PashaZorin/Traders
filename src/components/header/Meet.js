import React from "react";
import ButtonsGroup from "./ButtonsGroup";
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
        </div>
        <div className="meet__buttons-group">
          <ButtonsGroup />
        </div>
        {/*<div className="meet__buttons-group">
          <div className="meet__buttons-top">
            <div className="bottons__errow-"></div>
            <button
              style={{
                borderRadius: " 17px",
                padding: "16px 18px",

                background:
                  "linear-gradient(180deg, rgba(29,25,61,1) 18%, rgba(28,30,82,1) 81%)",
              }}
            >
              Second Step
            </button>
            <button
              style={{
                borderRadius: " 17px",
                padding: "16px 18px",
                background:
                  "linear-gradient(49deg, rgba(29,25,61,1) 18%, rgba(1,2,34,1) 81%)",
              }}
            >
              Third Step
            </button>
          </div>
          <div className="meet__buttons-center">
            <button
              style={{
                fontWeight: "700",
                fontSize: "18.67px",
                lineHeight: "22px",
                padding: "32px 36px 24px 36px",
                background:
                  "linear-gradient(52deg, rgba(3,3,15,1) 3%, rgba(28,30,82,1) 81%)",
              }}
            >
              First Step
            </button>
            <button style={{}}>Trading</button>
          </div>
          <div className="meet__buttons-bottom">
            <button>Earning</button>
            <button>Staking</button>
          </div>
        </div>*/}
      </div>
      <button className="meet__button">
        Learn More <img src={VectorErrow} alt={VectorErrow} />
      </button>
    </section>
  );
};

export default Meet;
