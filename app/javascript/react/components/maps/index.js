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
		<div className='searchResult'>
			<iframe className='map-canvas' src={mapUrl}></iframe>
			<div>
				<div className='first'>
					<div className='left'>
						<img className='image' src={firstPoint.image_url}></img>
						<div className='text'>
							<h3>{firstPoint.name}</h3>
							<h5>Phone: {firstPoint.display_phone}</h5>
							<h5>
								{" "}
								Address: {firstLocation.address1}, {firstLocation.city},{" "}
								{firstLocation.state}
							</h5>
							<h5>Rating: {firstPoint.rating}</h5>
							<h5>
								<a href={firstPoint.url} target='_blank'>
									<strong>Company Website</strong>
								</a>
							</h5>
						</div>
					</div>
					<div className='right'>
						<img className='image' src={secondPoint.image_url}></img>
						<div className='text'>
							<h3>{secondPoint.name}</h3>
							<h5>Phone: {secondPoint.display_phone}</h5>
							<h5>
								Address: {secondLocation.address1}, {secondLocation.city},{" "}
								{secondLocation.state}
							</h5>
							<h5>Rating: {secondPoint.rating}</h5>
							<h5>
								<a href={secondPoint.url} target='_blank'>
									<strong>Company Website</strong>
								</a>
							</h5>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MapComponent;
