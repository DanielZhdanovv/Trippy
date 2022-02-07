import React, { useState, useEffect } from "react";
import helperFetch from "../../../helper/Fetcher";

const MapComponent = (props) => {
	// const [apiKey, setApiKey] = useState("");
	const [mapUrl, setMapUrl] = useState("");

	useEffect(() => {
		helperFetch("/api/maps").then((response) => {
			const URL = `https://www.google.com/maps/embed/v1/directions?key=${response.key}`;
			const parameters = {
				origin: "Boston, MA",
				destination: "Worcester, MA",
				mode: "driving",
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
