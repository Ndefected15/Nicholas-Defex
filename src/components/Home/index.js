import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import Dev from '../../assets/lotties/Developer.json';
import Waves from '../../assets/lotties/Waves.json';
import '../Home/Home.css';

function Home() {
	return (
		<section className="my-1">
			<div className="wave" style={{ zIndex: -1 }}>
				<Player src={Waves} autoplay loop={true} />
			</div>
			<h1
				id="about"
				className="centered"
				style={{ paddingBottom: '200px', paddingLeft: '200px' }}
			>
				<div class="name">Who is Nicholas Defex</div>

				<div>
					<Player
						src={Dev}
						autoplay
						style={{
							width: '70%',
							height: '100%',
							margin: '1',
							paddingLeft: '400px',
							paddingTop: '400px',
						}}
					/>
				</div>
			</h1>
			<div className="centered">
				{/* <img src={coverImage} className="my-2" alt="cover" /> */}
			</div>
			<div className="my-5">
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
