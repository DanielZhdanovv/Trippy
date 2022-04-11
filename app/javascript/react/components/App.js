import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import IndexPage from "./Index";

export const App = (props) => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={IndexPage}></Route>
			</Switch>
		</BrowserRouter>
	);
};

export default App;
