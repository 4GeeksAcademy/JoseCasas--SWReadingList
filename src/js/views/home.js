import React from "react";
import CharacterCards from "../component/characterCards";
import PlanetCards from "../component/planetCards";
import SpecieCards from "../component/specieCards";


export const Home = () => {
	return (
		<div className="text-center mt-5">
			<CharacterCards />
			<PlanetCards />
			<SpecieCards />
		</div>
	)
};
