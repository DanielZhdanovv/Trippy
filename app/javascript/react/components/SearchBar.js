import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const SearchBar = ({ value, handleChange }) => {
	return (
		<Box
			sx={{
				width: 500,
				maxWidth: "100%",
			}}
		>
			<TextField
				fullWidth
				label='Search'
				id='fullWidth'
				value={value}
				onChange={handleChange}
			/>
		</Box>
	);
};

export default SearchBar;
