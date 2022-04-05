import React from "react";

const Home = (props) => {
	return (
		<div className="Counter">
			<div className="one">
				<i class="fa-regular fa-clock"></i>
			</div>
			<div className="one">{props.char1}</div>
			<div className="one">{props.char2}</div>
			<div className="one">{props.char3}</div>
			<div className="one">{props.char4}</div>
			<div className="one">{props.char5}</div>
			<div className="one">{props.char6}</div>
		</div>
	);
};

export default Home;
