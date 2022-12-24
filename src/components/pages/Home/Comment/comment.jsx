import React from "react";
import "./comment.scss";
import avaAtena from "../../../../assets/img/ava/AvaAtena.png";
import star from "../../../../assets/svg/star.svg";
import starGrey from "../../../../assets/svg/starGrey.svg";

export const Comment = () => {
  return (
    <div className="container comment">
      <div className="row">
        <div className="col-3 comment_avatar">
          <img src={avaAtena} alt="avatar" />
        </div>
        <div className="col-9 comment_description">
          <h5>Atena</h5>
          <p>
            i’m buying flower from them every weak, always fresh flowers and
            beutiful😍🌻... love’em so nuch..keep going 💯💯
          </p>
          <div className="comment_rating">
            <button>
              <img src={star} alt="star" />
            </button>
            <button>
              <img src={star} alt="star" />
            </button>
            <button>
              <img src={star} alt="star" />
            </button>
            <button>
              <img src={star} alt="star" />
            </button>
            <button>
              <img src={starGrey} alt="star" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
