import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./NavBar";

export const App = (props) => {
	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route exact path='/'></Route>
			</Switch>
		</BrowserRouter>
	);
};

export default App;
