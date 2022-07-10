import React from "react";
import "./Mainpage.css";
import App from "../App";
import fire from "../fire";
// import handleLogout from "../App";

const SearchBox = (props) => {
  // const handleLogout = App().handleLogout;

  const handleLogout = () => {
    fire.auth().signOut();
  };

  return (
    <div className="searchBox col col-sm-4">
      <input
        className="form-control"
        value={props.value}
        onChange={(event) => props.setSearchValue(event.target.value)}
        placeholder="Type to search..."
      ></input>
      <button type="button" className="btn " onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default SearchBox;
