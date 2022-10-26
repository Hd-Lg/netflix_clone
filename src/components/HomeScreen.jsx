import React from "react";

import { Banner, Nav } from "./";

import "./HomeScreen.css";

export default function HomeScreen() {
	return (
		<div className="homeScreen">
			<Nav />
			<Banner />
		</div>
	);
}
