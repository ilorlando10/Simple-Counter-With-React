//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

let seconds = 0;
var counter;
setInterval(myTimer, 1000);

function myTimer() {
	seconds += 1;
	counter = ("000000" + seconds).slice(-6);
	ReactDOM.render(
		<Home
			char1={counter.charAt(0)}
			char2={counter.charAt(1)}
			char3={counter.charAt(2)}
			char4={counter.charAt(3)}
			char5={counter.charAt(4)}
			char6={counter.charAt(5)}
		/>,
		document.querySelector("#app")
	);
}

// var seconds = 0;

// let counter = () => {
// 	seconds += 1;

// };

// setInterval(counter, 1000);
// //render your react application
// ReactDOM.render(<Home />, document.querySelector("#app"));
