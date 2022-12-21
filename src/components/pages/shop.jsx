import React from "react";

import { Catalog } from "./catalog";
import { FlowerInfo } from "./flower-info";

export const Shop = () => {
  return (
    <section id="shop" className="shop"> 
      <Catalog />
      <FlowerInfo />
    </section>
  );
};
