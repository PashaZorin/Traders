import React from "react";
import "../../styles/future.scss";

const Future = () => {
  return (
    <section className="future">
      <div className="conteiner future__conteiner">
        <div className="table">
          <div className="table__start">
            <button className="table__item">Artificial Intelligence</button>
            <button className="table__item">Storage Networks</button>
            <button className="table__item">P2P Networks</button>
          </div>
          <div className="table__center">
            <button className="table__item">Public Data</button>
            <button className="table__item">Encrypted Private Data *</button>
          </div>
          <div className="table__end">
            <p>
              Easy to use digital service and exclusive personal service for our
              active traders
            </p>
            <button className="table__item">Storage Networks</button>
            <button className="table__item">P2P Networks</button>
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
