import React from "react";
import { useState, useEffect } from "react";
import MapComponent from "./maps";
import SearchBar from "./SearchBar";
import Button from "@mui/material/Button";

const IndexPage = (props) => {
	const [yelp, setYelp] = useState({});
	const [location, setLocation] = useState("");
	const [delay, setDelay] = useState(false);

	const fetchYelp = async () => {
		const response = await fetch(`/api/yelp_search?location=${location}`);
		const parsedYelp = await response.json();
		setYelp(parsedYelp);
	};

	const handleChange = (e) => {
		e.preventDefault();
		setLocation(e.target.value);
	};

	useEffect(() => {
		if (delay) {
			clearTimeout(delay);
			setDelay(
				setTimeout(() => {
					fetchYelp();
				}, 1000)
			);
		} else {
			setDelay(
				setTimeout(() => {
					fetchYelp();
				}, 1000)
			);
		}
	}, [location]);

	const handleClear = (e) => {
		e.preventDefault();
		setLocation("");
	};
	// console.log(yelp);
	return (
		<>
			<h3>Yelp Search</h3>
			<SearchBar
				value={location}
				handleChange={handleChange}
				placeholder='Location'
			/>
			<Button variant='contained' onClick={handleClear}>
				Clear
			</Button>
			{yelp.businesses ? <MapComponent locations={yelp.businesses} /> : null}
		</>
	);
};
export default IndexPage;
