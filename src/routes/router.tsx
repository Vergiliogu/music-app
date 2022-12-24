import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from 'presentation/containers/navbar';

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				 <Route path='*' element={<Navbar />}>

				 </Route>
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
