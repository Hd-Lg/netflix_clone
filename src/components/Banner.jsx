import React, { useState, useEffect } from "react";
import "./Banner.css";
import axios from "../utils/axios";
import requests from "../utils/requests";

export default function Banner() {
	const [movie, setMovie] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(requests.fetchNetflixOriginals);
			console.log(`'Text' + ${requests.fetchNetflixOriginals}`);

			setMovie(
				request.data.results[
					Math.floor(Math.random() * request.data.results.length - 1)
				]
			);
			return request;
		}
		fetchData();
	}, []);

	console.log(movie);
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
