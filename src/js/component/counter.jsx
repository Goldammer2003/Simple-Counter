import React, {useState,useEffect} from "react";
import ClockDigits from "./clockdigits.jsx"; 

const Counter = () => {
    // Declaration of new state variables
const [seconds, setSeconds] = useState (0);
const [buttonVariable, setbuttonVariable] =useState (0);

let thousandsDigit = Math.floor ( (seconds/1000) % 10); 
let hundretsDigit = Math.floor ((seconds/100) % 10); 
let tensDigit = Math.floor ((seconds/10)%10);
let singleDigit = Math.floor ((seconds/1)%10);
}

useEffect(() =>{
    setTimeout(
        () =>{
        setSeconds((seconds) => seconds + 1);
       
    },
    10);
}, [buttonVariable]);

const clickHandler = () => {
    setbuttonVariable (buttonVariable =>buttonVariable+1);


}
return (
    <div>
        <div className ="d-flex flex-row clock-BG">
            <div className = "clock-indices">
                <h2>
                    <i className ="fas fa-clock"></i>
                </h2>
            </div>
           <ClockDigits value = {singleDigit}/>
           <Clockdigits value = {tenDigit}/>
           <ClockDigits value = {hundredGiti}/>
           <ClockDigits value = {thousendsDigit}
        </div>
        <button onClick = {()=> {clickHandler ()}}Click here </button>
        
    </div>
)
export default Counter;