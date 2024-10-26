import React from "react";
import CharacterCards from "../component/characterCards";
import PlanetCards from "../component/planetCards";
import SpecieCards from "../component/specieCards";
import "../../styles/home.css";

export const Home = () => {
	return (
		<div className="cCard text-start mt-5">
			<div className="m-5">
				<h1>Characters</h1>
				<CharacterCards />
			</div>
			<div className="m-5">
				<h1>Planets</h1>
				<PlanetCards />
			</div>
			<div className="m-5">
				<h1>Species</h1>
				<SpecieCards />
			</div>

		</div>
	)
};
