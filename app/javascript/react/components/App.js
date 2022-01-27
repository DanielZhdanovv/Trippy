import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./NavBar";
import IndexPage from "./Index"

export const App = (props) => {
	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route exact path='/' component={IndexPage}></Route>
			</Switch>
		</BrowserRouter>
	);
};

export default App;
