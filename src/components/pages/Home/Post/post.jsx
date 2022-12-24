import React from "react";
import "./post.scss";
import postImg from "../../../../assets/img/post-img/postImg.png";
import ava from "../../../../assets/img/ava/Ava.png";
import eye from "../../../../assets/svg/eye.svg";
import hurt from "../../../../assets/svg/grey_heart.svg";

export const Post = ({ title, description, pos }) => {
  const handleClick = () => {
    alert(pos);
  };

  return (
    <div className="container post">
      <div className="row post_header">
        <div className="col-6 ">
          <img src={ava} alt="avatar" /> <b>Emily</b>
        </div>
        <div className="col-6 post_header-data">2022/22/8</div>
      </div>
      <div className="post_image">
        <img src={postImg} alt="design" />
      </div>
      <div className="post_description">
        <h6>{title}</h6>
        <p>{description}</p>
        <div className="row post_footer">
          <div className="col-6 icons">
            <button className="hurt" onClick={handleClick}>
              <img src={hurt} alt="hurt" />
            </button>
            15
            <img src={eye} alt="eye" className="eye" /> 2001
          </div>
          <div className="col-6">
            <button className="wholePost">Read more</button>
          </div>
        </div>
      </div>
    </div>
  );
};
