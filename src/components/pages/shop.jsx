import React from "react";

import { FlowerInfo } from "../flower-info/flower-info";

export const Shop = ({flower}) => {
  return (
    <section
      id="shop"
      className="shop"
    >
      <div className="shop__category">This is SHOP</div>

      <FlowerInfo flower={flower} />
    </section>
  );
};
