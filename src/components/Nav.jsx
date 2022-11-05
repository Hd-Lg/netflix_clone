import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./Nav.css";
import Avatar from "../assets/avatar.png";
import Netflix_Logo from "../assets/Netflix-Logo-HD.png";

export default function Nav() {
	const [showNav, setShowNav] = useState(false);
	const navigate = useNavigate();

	function transitionNavbar() {
		if (window.scrollY > 100) {
			setShowNav(true);
		} else {
			setShowNav(false);
		}
	}

	useEffect(() => {
		window.addEventListener("scroll", transitionNavbar);
		return () => window.removeEventListener("scroll", transitionNavbar);
	}, []);

	return (
		<nav className={`nav ${showNav && "nav__black"}`}>
			<div className="nav__content">
				<img
					onClick={() => navigate("/")}
					className="nav__logo"
					src={Netflix_Logo}
					alt=""
				/>
				<img
					onClick={() => navigate("/profile")}
					className="nav__avatar"
					src={Avatar}
					alt=""
				/>
			</div>
		</nav>
	);
}
