import React from "react";
import "./home.scss";
import { Post } from "./Post/post";
import { GoodsCard } from "../../ui/goods/goodsCard";
import { MainTitle } from "./MainTitle/MainTitle";
import { Comment } from "./Comment/comment";
import { Title } from "./Title/title";

let arr = Array(4).fill({ name: "Flower's Name", price: 0 });
let bestSellers = arr.map((elem) => (
  <div className="col-3">

    <GoodsCard name={elem.name} price={elem.price} />
  </div>
));

export const Home = () => {
  return (
    <div className="container">
      <MainTitle />
      <Title name={"Best selers"} />

      <div className="row">{bestSellers}</div>
      <Title name={"Latest posts"} />

      <div className="row">
        <div className="col-4">
          <Post />
        </div>
        <div className="col-4">
          <Post />
        </div>
        <div className="col-4">
          <Post />
        </div>
      </div>
      <Title name={"Comments"} />

      <div className="row">
        <div className="col-4">
          <Comment />
        </div>
        <div className="col-4">
          <Comment />
        </div>
        <div className="col-4">
          <Comment />
        </div>
      </div>
    </div>
  );
};
