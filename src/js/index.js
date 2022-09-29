import React from "react";
import ReactDOM from "react-dom";

//fontawesome.config = {
 //   autoReplaceSvg: 'nest'
//}
//fontawesome.library.add (faClock);

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SimpleCounter from "./component/home.jsx";



ReactDOM.render (
    <SimpleCounter digitOne ={one} digitTwo ={two} digitThree ={three} digitFour ={four} />,
    document.querySelector ('app')
);