import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
	const [categories] = useState([
		{
			name: 'portfolio',
			description: 'Applications worked on',
		},
	]);

	const [currentCategory, setCurrentCategory] = useState(categories[0]);

	const [contactSelected, setContactSelected] = useState(false);

	return (
		<Router>
			<div>
				<Nav
					categories={categories}
					setCurrentCategory={setCurrentCategory}
					currentCategory={currentCategory}
					contactSelected={contactSelected}
					setContactSelected={setContactSelected}
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
							path="/gallery"
							element={<Gallery currentCategory={currentCategory} />}
						></Route>
					</Routes>
				</main>
				<footer>
					<a href="https://github.com/Ndefected15">Github</a>
					<br />
					<a href="https://www.linkedin.com/in/nicholas-defex-7634a41b4/">
						LinkedIn
					</a>
					<br />
					<a href="https://stackoverflow.com/users/17122731/ndefected15">
						StackOverflow
					</a>
				</footer>
			</div>
		</Router>
	);
}

export default App;
