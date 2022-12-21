import React from "react";

import { GoodsCard } from "../ui/goods/goodsCard";
import { Bar } from "../ui/bar/bar";

import "./pagesStyles/catalog.scss";

export const Catalog = () => {
  let arr = Array(10).fill({ name: "Flower's Name", price: 0 });
  let content = arr.map((elem, index) => (
    <GoodsCard
      name={elem.name}
      price={elem.price}
      key={index}
    />
  ));
  return (
    <>
      <Bar />
      <div className="catalog">{content}</div>
    </>
  );
};
