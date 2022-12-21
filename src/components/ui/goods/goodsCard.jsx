import React from "react";
import { Link } from "react-router-dom";

import { PATHS } from "../../../utils/urls";
import cartImg from "../../../assets/svg/cart-shopping.svg";
import flower from "../../../assets/img/selected-flower/flower.png";
import { Button } from "../button/button";

import "./goodsCard.scss";

export const GoodsCard = ({ name, price }) => {
  return (
    <Link to={PATHS.flower}>
      <div className="flexContainer">
        <div className="goodsCard">
          <img
            className="goodsCard__img"
            src={flower}
            alt="flower is lost.."
          />
          <h6 className="goodsCard__name">{name}</h6>
          <div className="goodsCard__bottom">
            <span className="goodsCard__price">0$</span>
            <div className="goodsCard__btn">
              <img
                src={cartImg}
                alt="cartImage"
              />
              <Button
                className="button-primary"
                text="Add to cart"
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
