import React from "react";
import "../../styles/future.scss";
import ErrowGroup from "../../images/main/future/ErrowGroup.svg";

const Future = () => {
  return (
    <section className="future" id="future">
      <div className="conteiner future__conteiner">
        <div className="table">
          <div className="table__start">
            <button className="table__item hvr-sweep-to-right">
              Artificial Intelligence
            </button>
            <div className="table__start-conteiner">
              <button className="table__item hvr-sweep-to-right">
                {" "}
                Storage Networks
              </button>
              <button className="table__item hvr-sweep-to-right">
                P2P Networks
              </button>
            </div>
          </div>
          <div className="table__center">
            <button className="table__item hvr-sweep-to-right">
              Public Data
            </button>
            <button className="table__item hvr-sweep-to-right">
              Encrypted Private Data *
            </button>
          </div>
          <div className="table__end">
            <p>
              Easy to use digital service and exclusive personal service for our
              active traders
            </p>
            <div className="table__end-conteiner">
              <button className="table__item hvr-sweep-to-right">
                Storage Networks
              </button>

              <button className="table__item hvr-sweep-to-right">
                P2P Networks
              </button>
            </div>
            <div className="table__end-img">
              <img src={ErrowGroup} alt={ErrowGroup} />
            </div>
          </div>
        </div>
        <div className="future__text">
          <h3 className="future__text-title">
            The future <span>of</span> Cryptocurrency trading{" "}
            <span>platform</span>
          </h3>
          <p>
            Take advantage of time and sales, futures spread orders and depth
            trader — plus, trade directly from charts.
          </p>
          <p>Learn more</p>
        </div>
      </div>
    </section>
  );
};

export default Future;
