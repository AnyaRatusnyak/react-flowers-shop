import React from "react";

import { Flower } from "./flower/flower";

import "./flower-info.scss";
import { Reviews } from "./reviews/reviews";

export const FlowerInfo = ({flower}) => {
  return (
    <section className="flower-info">
      <div className="container">
        <Flower flower={flower} />
        <Reviews />
      </div>
    </section>
  );
};
