import React from "react";
import Meet from "./Meet";
import Cards from "./Cards";
import Future from "./Future";
import Technologies from "./Technologies";

const Main = () => {
  return (
    <main>
      <Meet />
      <div className="main__container">
        <Technologies />
        <Future />
        <Cards />
      </div>
    </main>
  );
};

export default Main;
