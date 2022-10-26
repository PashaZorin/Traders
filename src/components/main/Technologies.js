import React from "react";
import "../../styles/technologies.scss";
import TableTech from "./TableTech";
const Technologies = () => {
  return (
    <section className="technologies">
      <div className="technologies__title-conteiner">
        <p className="technologies__subtitle">about us</p>
        <h3 className="technologies__title"> Global technologies</h3>
      </div>
      <div className="technologies__conteiner conteiner">
        <div className="technologies__schedule">
          <TableTech />
        </div>
        <div className="technologies__text">
          <h3> Level 1</h3>
          <p>
            Deploy a multi-legged futures strategy by simultaneously placing
            orders to buy and sell from the same order ticket.
          </p>
          <p>
            Place and manage orders based on the Level 2 order book, which
            provides a live display of all bids and offers waiting to be
            executed.
          </p>
          <button className="technologies__button">Start Now</button>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
