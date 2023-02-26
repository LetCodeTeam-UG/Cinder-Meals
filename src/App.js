import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar, Footer } from "./components";
import { Contact, Home, Login, Menu, TrackOrder } from "./containers";
import "./App.css";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Routes>
					<Route path="/home" element={<Home />}></Route>
					<Route path="/menu" element={<Menu />}></Route>
					<Route path="/trackorder" element={<TrackOrder />}></Route>
					<Route path="/contact" element={<Contact />}></Route>
					<Route path="/login" element={<Login />}></Route>
				</Routes>
			</div>
		);
	}
}

export default App;
