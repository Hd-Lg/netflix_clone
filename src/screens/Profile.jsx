import React from "react";
import { Nav } from "../components";

import "./Profile.css";

import Avatar from "../assets/avatar.png";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import PlansScreen from "./PlansScreen";

function Profile() {
	const user = useSelector(selectUser);
	return (
		<div className="profileScreen">
			<Nav />
			<div className="profileScreen__body">
				<h1>Edit Profile</h1>
				<div className="profileScreen__info">
					<img src={Avatar} alt="" />
					<div className="profileScreen__details">
						<h2>{user.email}</h2>
						<div className="profileScreen__plans">
							<h3>Plans</h3>
							<PlansScreen />
							<button
								onClick={() => auth.signOut()}
								className="profileScreen__signOut">
								Sign Out
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Profile;
