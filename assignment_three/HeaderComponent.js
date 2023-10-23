import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./logo.png";
import "./styles.css";
export default function HeaderComponent() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <form className="header">
        <img src={logo} />
        <div className="search-bar">
          <input type="text" placeholder="Search.." name="search" />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </div>
      </form>
    </>
  );
}
