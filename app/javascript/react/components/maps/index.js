import React, { useState, useEffect } from "react";
import helperFetch from "../../../helper/Fetcher";

const MapComponent = ({ locations }) => {
	// const [apiKey, setApiKey] = useState("");
	const [firstPoint, setFirstPoint] = useState([]);
	const [secondPoint, setSecondPoint] = useState({});
	const [firstLocation, setFirstLocation] = useState([]);
	const [secondLocation, setSecondLocation] = useState({});
	const [mapUrl, setMapUrl] = useState("");

	const randomInteger = (min, max) => {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};

	let firstNumber = randomInteger(0, 9);
	let secondNumber = randomInteger(10, 19);

	useEffect(() => {
		helperFetch("/api/maps").then((response) => {
			const URL = `https://www.google.com/maps/embed/v1/directions?key=${response.key}`;
			const parameters = {
				origin: `${locations[firstNumber].coordinates.latitude} ${locations[firstNumber].coordinates.longitude}`,
				destination: `${locations[secondNumber].coordinates.latitude} ${locations[secondNumber].coordinates.longitude}`,
				mode: "driving",
			};
			let source = URL;
			Object.keys(parameters).forEach(
				(key) => (source += `&${key}=${parameters[key]}`)
			);
			setMapUrl(source);
			setFirstPoint(locations[firstNumber]);
			setSecondPoint(locations[secondNumber]);
			setFirstLocation(locations[firstNumber].location);
			setSecondLocation(locations[secondNumber].location);
		});
	}, []);

	return (
		// <div>
		// 	<iframe src={mapUrl}></iframe>
		// 	<div className='left'>
		// 		<h1>{firstPoint.name}</h1>
		// 		<h2>{firstPoint.display_phone}</h2>
		// 		<h2>
		// 			{firstLocation.address1}, {firstLocation.city}, {firstLocation.state}
		// 		</h2>
		// 		<h2>{firstPoint.rating} Stars</h2>
		// 		<img className='image' src={firstPoint.image_url}></img>
		// 	</div>
		// 	<div className='right'>
		// 		<h1>{secondPoint.name}</h1>
		// 		<h2>{secondPoint.display_phone}</h2>
		// 		<h2>
		// 			{secondLocation.address1}, {secondLocation.city},{" "}
		// 			{secondLocation.state}
		// 		</h2>
		// 		<h2>{secondPoint.rating} Stars</h2>
		// 		<img className='image' src={secondPoint.image_url}></img>
		// 	</div>
		<div>
			<div className='left'>
				<h1>Amazing place com</h1>
				<h2>617 697 8423</h2>
				<h2>31 elizabeth st, Worcester, MA</h2>
				<h2>5 Stars</h2>
				<img
					className='image'
					src='https://static01.nyt.com/images/2022/04/06/dining/06rest-mena1/05rest-mena1-threeByTwoMediumAt2X.jpg'
				></img>
			</div>
			<div className='right'>
				<h1>Amazing place com</h1>
				<h2>617 697 8423</h2>
				<h2>31 elizabeth st, Worcester, MA</h2>
				<h2>5 Stars</h2>
				<img
					className='image'
					src='https://static01.nyt.com/images/2022/04/06/dining/06rest-mena1/05rest-mena1-threeByTwoMediumAt2X.jpg'
				></img>
			</div>
		</div>
	);
};

export default MapComponent;
