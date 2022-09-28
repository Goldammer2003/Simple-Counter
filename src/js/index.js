//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import "bootstrap";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";


function SimpleCounter (props)b {
    return <div className ="counterwhole">
      <div className = "calender"></div>
      <div className ="position4"></div>
      <div className ="position3"></div>
      <div className ="position2"></div>
      <div className ="position1"></div>
    </div>;
}

//render your react application
ReactDOM.render (
    <SimpleCounter/>
    document.querySelector ('app')
)
