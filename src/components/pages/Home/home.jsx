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

let postsData = [
  {
    id: 1,
    title: "Best flowers for inside home",
    description:
      "All the flowers are best for your lovly house just get the one you love the most 😊",
  },
];

let latestPost = postsData.map((post) => (
  <div className="col-4">
    <Post key={post.id} title={post.title} description={post.description} />
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
        {latestPost}
        {latestPost}
        {latestPost}
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
