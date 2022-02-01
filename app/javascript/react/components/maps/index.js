import React from "react"

const MapComponent = (props) => {
    const API_KEY = "AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg";
    const URL = `https://www.google.com/maps/embed/v1/directions?key=${API_KEY}`

    const parameters = {
        origin: "Boston, MA",
        destination: "Worcester, MA",
        mode: "walking"
    }

    let source = URL
    Object.keys(parameters).forEach(key => source += `&${key}=${parameters[key]}`)

    return (
        <iframe src={source} />
        // <h1>{source}</h1>
    )
}

export default MapComponent