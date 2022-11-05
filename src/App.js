import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { auth } from "./firebase";
import { HomeScreen, Login, Profile } from "./screens";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";

export default function App() {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	useEffect(() => {
		// Like a listener, store login in cookie
		const unsubscribe = auth.onAuthStateChanged((userAuth) => {
			if (userAuth) {
				// logged in
				dispatch(
					login({
						uid: userAuth.uid,
						email: userAuth.email,
					})
				);
			} else {
				// logged out
				dispatch(logout());
			}
		});
		return unsubscribe;
	}, [dispatch]);

	return (
		<div className="App">
			<Routes>
				<Route index element={!user ? <Login /> : <HomeScreen />} />
				<Route
					path="/profile"
					element={!user ? <Login /> : <Profile />}
				/>
			</Routes>
		</div>
	);
}
