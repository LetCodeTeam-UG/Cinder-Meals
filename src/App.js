import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import { Contact, Home, Login, Menu, TrackOrder } from "./containers";
import { Main, Beverages } from "./components"
import "./App.css";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Routes>
					<Route path="" element={<Home />}></Route>
					<Route path="/home" element={<Home />}></Route>
					<Route path="/menu" element={<Menu />}></Route>
					<Route path="/menu/main" element={<Main />}></Route>
					<Route path="/menu/beverages" element={<Beverages />}></Route>
					<Route path="/trackorder" element={<TrackOrder />}></Route>
					<Route path="/contact" element={<Contact />}></Route>
					<Route path="/login" element={<Login />}></Route>
				</Routes>
			</div>
		);
	}
}

export default App;
