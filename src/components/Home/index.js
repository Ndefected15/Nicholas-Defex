import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import Dev from '../../assets/lotties/Developer.json';

function Home() {
	return (
		<section className="my-5">
			<h1 id="about" className="centered">
				Who is Nicholas Defex
				<div className="container">
					<Player
						src={Dev}
						className="player"
						autoplay
						style={{ height: '300px', width: '300px' }}
					/>
				</div>
			</h1>
			<div className="centered">
				{/* <img src={coverImage} className="my-2" alt="cover" /> */}
			</div>
			<div className="my-2">
				<p>
					Solution-oriented Full Stack Web Developer known as a diligent
					collaborative problem solver. Worked with multiple teams of 3 to
					create an e-commerce site as well as a blog focused site dedicated to
					displaying the release dates of Marvel films. Eager to become familiar
					in the world of web development and to continue to grow from the work
					to be done.
				</p>
				<br></br>
				<br></br>
				<br></br>
				<h1 className="centered">Skills</h1>
				<p className="centered">
					HTML, CSS, Javascript, SQL, MongoDB, Express.js, REACT.js, Node.js,
					ORM, MVC, PWA, OOP
				</p>
			</div>
		</section>
	);
}

export default Home;
