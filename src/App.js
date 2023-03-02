import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import ClipLoader from 'react-spinners/ClipLoader';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, []);

	const [categories] = useState([
		{
			name: 'portfolio',
			description: 'Applications worked on',
		},
	]);

	const [currentCategory, setCurrentCategory] = useState(categories[0]);

	// const [contactSelected, setContactSelected] = useState(false);

	return (
		<div>
			{loading ? (
				<div className="loading">
					<ClipLoader
						color={'#00000'}
						loading={loading}
						size={100}
						aria-label="Loading Spinner"
						data-testid="loader"
					/>
				</div>
			) : (
				<Router>
					<div>
						<Nav
							// categories={categories}
							setCurrentCategory={setCurrentCategory}
							currentCategory={currentCategory}
							// contactSelected={contactSelected}
							// setContactSelected={setContactSelected}
						></Nav>
						<main>
							{/* {!contactSelected ? (
						<>
							
							<About></About>
						</>
					) : (
						<ContactForm></ContactForm>
					)} */}
							{/* <Gallery currentCategory={currentCategory} ></Gallery> */}
							<Routes>
								<Route path="/about" element={<About />}></Route>
								<Route path="/contact" element={<ContactForm />}></Route>
								<Route
									path="/portfolio"
									element={<Portfolio currentCategory={currentCategory} />}
								></Route>
								<Route path="/" element={<Home />}></Route>
							</Routes>
						</main>
					</div>
				</Router>
			)}
		</div>
	);
}

export default App;
