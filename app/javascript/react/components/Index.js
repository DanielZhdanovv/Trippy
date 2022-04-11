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
	// console.log(yelp);
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
							locations that you must visit with your friends.
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
						<div className='first'>
							<div className='left'>
								<img
									className='image'
									src='https://static01.nyt.com/images/2022/04/06/dining/06rest-mena1/05rest-mena1-threeByTwoMediumAt2X.jpg'
								></img>
								<div className='text'>
									<h3>Amazing place com</h3>
									<h4>617 697 8423</h4>
									<h4>31 elizabeth st, Worcester, MA</h4>
									<h4>5 Stars</h4>
								</div>
							</div>
							<div className='right'>
								<img
									className='image'
									src='https://static01.nyt.com/images/2022/04/06/dining/06rest-mena1/05rest-mena1-threeByTwoMediumAt2X.jpg'
								></img>
								<div className='text'>
									<h3>Amazing place com</h3>
									<h4>617 697 8423</h4>
									<h4>31 elizabeth st, Worcester, MA</h4>
									<h4>5 Stars</h4>
								</div>
							</div>
						</div>
					</Container>
				</Box>
			</main>
			{/* Footer */}
			<Box sx={{ bgcolor: "background.paper", p: 6 }} component='footer'></Box>
			{/* End footer */}
		</ThemeProvider>
	);
};
export default IndexPage;
