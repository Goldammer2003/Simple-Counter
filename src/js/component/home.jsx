import React from "react";
import PropTypes from 'prop-types';
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
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
setInterval (function () {
    // const four= Math.floor (counter/1000);
    // const three=Math.floor (counter/100);
    // const two = Math.floor (counter/10);
    // const one = Math.floor (counter/1)

    // counter++;

console.log ("i am in set interval")
//render your react application



},1000)

export default SimpleCounter
