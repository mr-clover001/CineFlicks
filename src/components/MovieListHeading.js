import React from "react";
import "./Mainpage.css";

const MovieListHeading = (props) => {
  return (
    <div className="heading col">
      <h1>{props.heading}</h1>
    </div>
  );
};

export default MovieListHeading;
