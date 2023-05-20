import react, { useState } from "react";
import './Header.css';

function Header({setCategory}){

    return (
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"> 📰 News360</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">

      <li className="nav-item" id="all">
          <a className="nav-link" onClick={function(){
            window.sessionStorage.setItem("current", "all");
            window.sessionStorage.setItem("count", "0");
            setCategory("all");
          }}>Home</a>
        </li>

        <li className="nav-item" id="national">
          <a className="nav-link" onClick={function(){
            window.sessionStorage.setItem("current", "national");
            window.sessionStorage.setItem("count", "0");
            setCategory("national");
          }}>India</a>
        </li>

        <li className="nav-item" id="politics">
          <a className="nav-link" onClick={function(){
            window.sessionStorage.setItem("current", "politics");
            window.sessionStorage.setItem("count", "0");
            setCategory("politics");
          }}>Politics</a>
        </li>

        <li className="nav-item" id="world">
          <a className="nav-link" onClick={function(){
            window.sessionStorage.setItem("current", "world");
            window.sessionStorage.setItem("count", "0");
            setCategory("world");}}>World</a>
        </li>

        <li className="nav-item" id="business">
          <a className="nav-link" onClick={function(){
            window.sessionStorage.setItem("current", "business");
            window.sessionStorage.setItem("count", "0");
            setCategory("business");
          }}>Business</a>
        </li>

        <li className="nav-item" id="technology">
          <a className="nav-link" onClick={function(){
            window.sessionStorage.setItem("current", "technology");
            window.sessionStorage.setItem("count", "0");
            setCategory("technology");}}>Technology</a>
        </li>

        <li className="nav-item" id="automobile">
          <a className="nav-link" onClick={function(){
            window.sessionStorage.setItem("current", "automobile");
            window.sessionStorage.setItem("count", "0");
            setCategory("automobile");}}>Automobile</a>
        </li>

        <li className="nav-item" id="startup">
          <a className="nav-link" onClick={function(){
            window.sessionStorage.setItem("current", "startup");
            window.sessionStorage.setItem("count", "0");
            setCategory("startup");}}>Startup</a>
        </li>

        <li className="nav-item" id="science">
          <a className="nav-link" onClick={function(){
            window.sessionStorage.setItem("current", "science");
            window.sessionStorage.setItem("count", "0");
            setCategory("science");}}>Science</a>
        </li>

        <li className="nav-item" id="sports">
          <a className="nav-link" onClick={function(){
            window.sessionStorage.setItem("current", "sports");
            window.sessionStorage.setItem("count", "0");
            setCategory("sports");}}>Sports</a>
        </li>

        <li className="nav-item" id="entertainment">
          <a className="nav-link" onClick={function(){
            window.sessionStorage.setItem("current", "entertainment");
            window.sessionStorage.setItem("count", "0");
            setCategory("entertainment");}}>Entertainment</a>
        </li>

        <li className="nav-item" id="hatke">
          <a className="nav-link" onClick={function(){
            window.sessionStorage.setItem("current", "hatke");
            window.sessionStorage.setItem("count", "0");
            setCategory("hatke");}}>Hatke</a>
        </li>

      </ul>
    </div>
  </div>
</nav>
        </>
    );
};

export default Header;