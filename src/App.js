import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';

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
		<div>
			<Nav
				categories={categories}
				setCurrentCategory={setCurrentCategory}
				currentCategory={currentCategory}
				contactSelected={contactSelected}
				setContactSelected={setContactSelected}
			></Nav>
			<main>
				{!contactSelected ? (
					<>
						<Gallery currentCategory={currentCategory}></Gallery>
						<About></About>
					</>
				) : (
					<ContactForm></ContactForm>
				)}
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
	);
}

export default App;
