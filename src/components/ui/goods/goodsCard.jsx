import React from "react";
import "./goodsCard.scss"
import flower from "../../../assets/img/selected-flower/flower.png";
import cart from "../../../assets/svg/cart.svg";

export const GoodsCard = () => {
  return (
    <div className="goodsCard">
      <img className="goodsCard__img" src={flower} alt="flower is lost.." />
      <h6 className="goodsCard__name">Flower's Name</h6>
      <span className="goodsCard__price">0$</span>
      <a href="#" className="goodsCard__addToCard"><img src={cart} alt="cart" />Add to cart</a>
    </div>
  );
};