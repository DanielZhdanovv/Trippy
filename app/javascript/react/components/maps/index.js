import React, { useState, useEffect } from "react";
import helperFetch from "../../../helper/Fetcher";

const MapComponent = ({ locations }) => {
	// const [apiKey, setApiKey] = useState("");
	const [destination, setDestinaition] = useState("");
	const [mapUrl, setMapUrl] = useState("");

	useEffect(() => {
		helperFetch("/api/maps").then((response) => {
			const URL = `https://www.google.com/maps/embed/v1/directions?key=${response.key}`;
			const parameters = {
				origin: `${locations[0].coordinates.latitude} ${locations[0].coordinates.longitude}`,
				waypoints: `${locations[4].coordinates.latitude} ${locations[4].coordinates.longitude}`,
				destination: `${locations[2].coordinates.latitude} ${locations[2].coordinates.longitude}`,
				mode: "walking",
			};
			let source = URL;
			Object.keys(parameters).forEach(
				(key) => (source += `&${key}=${parameters[key]}`)
			);
			setMapUrl(source);
		});
	}, []);

	return <iframe src={mapUrl}></iframe>;
};

export default MapComponent;
