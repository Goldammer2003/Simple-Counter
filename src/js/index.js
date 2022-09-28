//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import "bootstrap";
import fontawesome from "@fortawesome/fontawesome";
import faFlock from "@fortawesome/fontawesome-free-regular/faClock";
import './icons.js'
import PropTypes from "proptypes";

fontawesome.config = {
    autoReplaceSvg: 'nest'
}
fontawesome.library.add (faClock);

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";


function SimpleCounter (props) {
    return (
    <div className ="counterwhole">
      <div className = "calender">
        <i className ="far fa-clock"></i>
      </div>
      <div className ="position4">{props.digitFour}</div>
      <div className ="position3">{props.digitThree}</div>
      <div className ="position2">{props.digitTwo}</div>
      <div className ="position1">{props.digitOne}</div>
    </div>)
}
SimpleCounter.propTypes = {
    digitFour:PropTypes.array,
    digitThree:PropTypes.number,
    digitTwo: PropTypes.number,
    digitOne:PropTypes.number,
};

let counter = 0;
setIntervall (function () {
    const four= Math.floor (counter/1000);
    const three=Math.floor (counter/100);
    const two = Math.floor (counter/10);
    const one = Math.floor (counter/1)

    counter++;
}
//render your react application
ReactDOM.render (
    <SimpleCounter digitOne ={one}digitOne ={two}digitOne ={three}digitOne ={four} />,
    document.querySelector ('app')
);
