import React from "react";
import requests from "../utils/requests";

import { Banner, Nav, Row } from "../components";

import "./HomeScreen.css";

export default function HomeScreen() {
	return (
		<div className="homeScreen">
			<Nav />
			<Banner />
			<Row
				title="NETFLIX ORIGINALS"
				fetchUrl={requests.fetchNetflixOriginals}
			/>
			<Row title="Trending Now" fetchUrl={requests.fetchTrending} />
			<Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
			<Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
			<Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
			<Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
			<Row
				title="Romance Movies"
				fetchUrl={requests.fetchRomanceMovies}
			/>
			<Row title="Sci-Fi Movies" fetchUrl={requests.fetchSciFi} />
			<Row title="Mystery Movies" fetchUrl={requests.fetchMystery} />
			<Row title="Animation Movies" fetchUrl={requests.fetchAnimation} />
			<Row title="Western Movies" fetchUrl={requests.fetchWestern} />
		</div>
	);
}
