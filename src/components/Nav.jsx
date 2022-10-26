import React, { useState } from "react";
import { useEffect } from "react";

import "./Nav.css";

export default function Nav() {
	const [showNav, setShowNav] = useState(false);

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
					className="nav__logo"
					src="http://www.pngall.com/wp-content/uploads/4/Netflix-Logo-HD.png"
					alt=""
				/>
				<img
					className="nav__avatar"
					src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
					alt=""
				/>
			</div>
		</nav>
	);
}
