import React from "react";
import "./home.scss";
import { Post } from "./Post/post";
import { GoodsCard } from "../../ui/goods/goodsCard";
import { MainTitle } from "./MainTitle/MainTitle";
import { Comment } from "./Comment/comment";
import { Title } from "./Title/title";
import flowerOne from '../../../assets/img/main-title/One.png';
import flowerTwo from '../../../assets/img/main-title/Two.png';
import flowerThree from '../../../assets/img/main-title/Three.png';
import flowerFour from '../../../assets/img/main-title/Four.png';
import flowerFive from '../../../assets/img/main-title/Five.png';
import flowerSix from '../../../assets/img/main-title/Six.png';

let arr = Array(4).fill({ name: "Flower's Name", price: 0 });
let bestSellers = arr.map((elem) => (
  <div className="col-sm-3 text-center">
    <GoodsCard name={elem.name} price={elem.price} />
  </div>
));

const flowers = [
    {flower: flowerOne, desc: 'flowerOne'},
    {flower: flowerTwo, desc: 'flowerTwo'},
    {flower: flowerThree, desc: 'flowerThree'},
    {flower: flowerFour, desc: 'flowerFour'},
    {flower: flowerFive, desc: 'flowerFive'},
    {flower: flowerSix, desc: 'flowerSix'}
]

let postsData = [
  {
    id: 1,
    title: "Best flowers for inside home",
    description:
      "All the flowers are best for your lovely house just get the one you love the most 😊",
  },
  {
    id: 2,
    title: "Best flowers for inside home",
    description:
      "All the flowers are best for your lovly house just get the one you love the most 😊",
  },
  {
    id: 3,
    title: "Best flowers for inside home",
    description:
      "All the flowers are best for your lovly house just get the one you love the most 😊",
  },
];

let latestPost = postsData.map((post, pos) => (
  <div className="col-sm-4">
    <Post
      key={post.id}
      title={post.title}
      description={post.description}
      pos={pos}
    />
  </div>
));

export const Home = () => {
  return (
    <div className="container">
      <MainTitle flowers={flowers}/>
      <Title name={"Best sellers"} />

      <div className="row">{bestSellers}</div>
      <Title name={"Latest posts"} />

      <div className="row">{latestPost}</div>
      <Title name={"Comments"} />

      <div className="row">
        <div className="col-sm-4">
          <Comment />
        </div>
        <div className="col-sm-4">
          <Comment />
        </div>
        <div className="col-sm-4">
          <Comment />
        </div>
      </div>
    </div>
  );
};
