import React from "react";
import "./Banner.css";

export default function Banner() {
	function truncate(string, n) {
		return string?.length > n ? string.substr(0, n - 1) + "..." : string;
	}
	return (
		<header
			className="banner"
			style={{
				backgroundSize: "cover",
				backgroundImage: `url("https://tecstaff.jp/wp-content/uploads/2018/09/netflix_banner.jpg")`,
				backgroundPosition: "center center",
			}}>
			<div className="banner__contents">
				<h1 className="banner__title">Movie Name</h1>
				<div className="banner__buttons">
					<button className="banner__button">Play</button>
					<button className="banner__button">My List</button>
				</div>
				<h1 className="banner__description">
					{truncate(`Description`, 150)}
				</h1>
			</div>
			<div className="banner--fadeBottom" />
		</header>
	);
}
