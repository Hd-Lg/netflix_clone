import React from "react";
import { Routes, Route } from "react-router-dom";

import { HomeScreen, Login } from "./screens";
import "./App.css";

export default function App() {
	const user = null;

	return (
		<div className="App">
			<Routes>
				{!user ? (
					<Route path="/login" element={<Login />} />
				) : (
					<Route path="/" element={<HomeScreen />} />
				)}
			</Routes>
		</div>
	);
}
