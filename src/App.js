import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import {
	Contact,
	Home,
	Login,
	Menu,
	ProductPage,
	SignUp,
	TrackOrder,
} from "./pages";
import "./App.css";

const App = () => {
	const [product, setProduct] = useState(null);
	const [quantity, setQuantity] = useState(1);
	const [price, setPrice] = useState(null);

	useEffect(() => {
		const storedProduct = localStorage.getItem("product");
		if (storedProduct) {
			const parsedProduct = JSON.parse(storedProduct);
			setProduct(parsedProduct);
			setPrice(parsedProduct.price);
		}
	}, []);
	return (
		<div className="App">
			<Routes>
				<Route path="" element={<Login />}></Route>
				<Route path="/home" element={<Home />}></Route>
				<Route path="/menu" element={<Menu />}></Route>
				<Route path="/trackorder" element={<TrackOrder />}></Route>
				<Route path="/contact" element={<Contact />}></Route>
				<Route path="/auth/login" element={<Login />}></Route>
				<Route path="/auth/register" element={<SignUp />}></Route>
				<Route exact path="/product/id?"
					element={<ProductPage product={product} quantity={quantity} setQuantity={setQuantity} price={price} setPrice={setPrice} />}>
				</Route>
			</Routes>
		</div>
	);

}

export default App;
