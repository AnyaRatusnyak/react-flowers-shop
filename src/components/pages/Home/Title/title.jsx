import React from "react";
import "./title.scss";

export const Title = (props) => {
  return (
    <div className="row justify-content-center title">
      <div className="col-sm-2 pt-1 px-0">
        <hr />
      </div>
      <div className="col-sm-3 text-center p-0 ">
        <h2>{props.name}</h2>
      </div>
      <div className="col-sm-2 pt-1 px-0">
        <hr />
      </div>
    </div>
  );
};
