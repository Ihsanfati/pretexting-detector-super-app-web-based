// Importing modules
import React, { useState, useEffect } from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from "./components/main";
import ContactUs from "./components/contactUs";
import "./App.css";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Main />}></Route> 
				<Route path="/contact" element={<ContactUs />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
