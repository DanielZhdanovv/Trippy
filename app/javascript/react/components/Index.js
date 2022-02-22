import React from "react";
import { useState, useEffect } from "react";
import MapComponent from "./maps";


const IndexPage = (props) => {
	const [yelp, setYelp] = useState([]);
	const [location, setLocation] = useState("worcester");

	const fetchYelp = async () => {
		const response = await fetch(`/api/yelp_search?location=${location}`);
		const parsedYelp = await response.json();
		setYelp(parsedYelp);
	};

	useEffect(() => {
		fetchYelp();
	}, []);

	console.log(yelp)
	return (
		<>
			<h1>yelp</h1>
			<MapComponent />
		</>
	) 
};
export default IndexPage;
