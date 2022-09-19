import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";

// pages
import {
	About,
	Brands,
	Contact,
	Home,
	Login,
	Cuslogin,
	Emplogin,
	Adminlogin,
	Products,
	Register,
	Services,
} from "../pages";

function App() {
	return (
		<>
			<Router>
				<NavBar />
				<Routes>
					{/* Basic Routing */}
					<Route path="/" element={<Home />} />
					<Route path="/products" element={<Products />} />
					<Route path="/brands" element={<Brands />} />
					<Route path="/services" element={<Services />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />

					{/* Login Selection */}
					<Route path="/login" element={<Login />} />
					<Route path="/login/cuslogin" element={<Cuslogin />} />
					<Route path="/login/emplogin" element={<Emplogin />} />
					<Route path="/login/adminlogin" element={<Adminlogin />} />

					{/* Register Selection */}
					<Route path="/register" element={<Register />} />
				</Routes>
				<Footer />
			</Router>
		</>
	);
}

export default App;
