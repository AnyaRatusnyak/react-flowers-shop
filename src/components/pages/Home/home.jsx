import React from "react";
import "./home.scss";
import { Post } from "./Post/post";
import { GoodsCard } from "../../ui/goods/goodsCard";
import { MainTitle } from "./MainTitle/MainTitle";
import { Comment } from "./Comment/comment";

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
      <div>Best selers</div>
      <div className="row">{bestSellers}</div>
      <div>Latest posts</div>
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
      <div>Comments</div>
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
