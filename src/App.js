import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { auth } from "./firebase";
import { HomeScreen, Login } from "./screens";
import "./App.css";

export default function App() {
	const user = null;

	useEffect(() => {
		// Like a listener, store login in cookie
		const unsubscribe = auth.onAuthStateChanged((userAuth) => {
			if (userAuth) {
				// logged in
				console.log(userAuth);
			} else {
				// logged out
			}
		});
		return unsubscribe;
	}, []);

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
