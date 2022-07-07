import React from 'react';
// import { capitalizeFirstLetter } from '../../utils/helpers';
import resume from '../../assets/Nicholas_Defex_Resume_2022.pdf';
import { Link } from 'react-router-dom';

function Nav(props) {
	// const {
	// 	categories = [],
	// 	setCurrentCategory,
	// 	contactSelected,
	// 	currentCategory,
	// } = props;

	// useEffect(() => {
	// 	document.title = capitalizeFirstLetter(currentCategory.name);
	// }, [currentCategory]);

	return (
		<header className="flex-row px-1">
			<h2>
				<Link to={'/portfolio'}>
					<span role="img" aria-label="computer">
						{' '}
						💻
					</span>{' '}
					Nicholas Defex
				</Link>
			</h2>
			<nav>
				<ul className="flex-row">
					<li className={`mx-2 ${'navActive'}`}>
						<Link to={'/portfolio'}>Portfolio</Link>
					</li>
					<li className="mx-2">
						<Link to="/about">About me</Link>
					</li>
					<li className={`mx-2 ${'navActive'}`}>
						<Link to={'/contact'}>Contact me</Link>
					</li>

					{/* {categories.map((category) => (
						<li
							className={`mx-1 ${
								currentCategory.name === category.name &&
								!contactSelected &&
								'navActive'
							}`}
							key={category.name}
						>
							<span
								onClick={() => {
									setCurrentCategory(category);
								}}
							>
								{capitalizeFirstLetter(category.name)}
							</span>
						</li>
					))} */}
					<li className="mx-2">
						<a
							data-testid="resume"
							href={resume}
							download="Nicholas_Defex_Resume_2022.pdf"
						>
							Resume
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Nav;
