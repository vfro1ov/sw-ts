import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { routerConfig } from '../../routes/routerConfig';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					{routerConfig.map((route, index) => (
						<Route key={index} path={route.path} element={<route.element />} />
					))}
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
