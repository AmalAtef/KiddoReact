import React from "react";
import { Link } from "react-router-dom";

const KidDashboard = ({ profile }) => {
	return (
		<>
			<section className="d-flex justify-content-between my-lg">
				<div className="number-card coming-soon">
					<h3 className="number-card__title">Your Level</h3>
					<img src={process.env.PUBLIC_URL + "/imgs/d-level.svg"} alt="c"></img>
					<p className="number-card__number">Expert</p>
				</div>
				<div className="number-card">
					<h3 className="number-card__title">Interested Categories</h3>
					<img
						src={process.env.PUBLIC_URL + "/imgs/d-categories.svg"}
						alt="c"
					></img>
					<p className="number-card__number">{profile?.categories?.length}</p>
				</div>
				<div className="number-card coming-soon">
					<h3 className="number-card__title">Your Points</h3>
					<img
						src={process.env.PUBLIC_URL + "/imgs/d-points.svg"}
						alt="c"
					></img>
					<p className="number-card__number">8092</p>
				</div>
				<div className="number-card coming-soon">
					<h3 className="number-card__title">Your Coins</h3>
					<img src={process.env.PUBLIC_URL + "/imgs/d-coins.svg"} alt="c"></img>
					<p className="number-card__number">4000</p>
				</div>
				<div className="number-card coming-soon">
					<h3 className="number-card__title">Finished Courses</h3>
					<img
						src={process.env.PUBLIC_URL + "/imgs/d-finished.svg"}
						alt="c"
					></img>
					<p className="number-card__number">6</p>
				</div>
			</section>
		</>
	);
};

export default KidDashboard;
