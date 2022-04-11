import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState, useEffect } from "react";
import MapComponent from "./maps";
import SearchBar from "./SearchBar";
import AddLocationAltOutlinedIcon from "@mui/icons-material/AddLocationAltOutlined";

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

	const theme = createTheme();
	console.log(yelp);
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<AppBar position='relative'>
				<Toolbar>
					<AddLocationAltOutlinedIcon sx={{ mr: 2 }} />
					<Typography variant='h6' color='inherit' noWrap>
						Trippy
					</Typography>
				</Toolbar>
			</AppBar>
			<main>
				{/* Hero unit */}
				<Box
					sx={{
						bgcolor: "background.paper",
						pt: 8,
						pb: 6,
					}}
				>
					<Container maxWidth='sm'>
						<Typography
							component='h1'
							variant='h2'
							align='center'
							color='text.primary'
							gutterBottom
						>
							Trippy Search
						</Typography>
						<Typography
							variant='h5'
							align='center'
							color='text.secondary'
							paragraph
						>
							Trippy allows you to discover new restaurants in the area of your
							choice, type in a location of interest and get two random
							restaurants that you must visit with your friends.
						</Typography>
						<SearchBar
							value={location}
							handleChange={handleChange}
							placeholder='Location'
						/>
						<Button
							className='clearButton'
							variant='contained'
							onClick={handleClear}
						>
							Clear
						</Button>
					</Container>
				</Box>
				{yelp.businesses ? <MapComponent locations={yelp.businesses} /> : null}
			</main>
			{/* Footer */}
			<Box sx={{ bgcolor: "background.paper", p: 6 }} component='footer'>
				<Typography
					variant='subtitle1'
					align='center'
					color='text.secondary'
					component='p'
				>
					Follow me on Github for more
				</Typography>
			</Box>
			{/* End footer */}
		</ThemeProvider>
	);
};
export default IndexPage;
