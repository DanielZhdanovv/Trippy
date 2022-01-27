import React from "react";
import { useState, useEffect } from "react";
import helperFetch from "Fetcher.js"

const IndexPage = (props) => {
	const [yelp, setYelp] = useState([]);
}
	const fetchYelp = async () => {
		const response = await fetch("/api/v1/games");
		const parsedYelp = await response.json();
	};
	useEffect(() => {
		fetchYelp();
	}, [])
  return (
		console.log(parsedYelp);
  )
  export default IndexPage