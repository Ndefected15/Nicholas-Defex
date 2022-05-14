import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';

function About() {
	return (
		<section className="my-5">
			<h1 id="about">Who is Nicholas Defex</h1>
			<img
				src={coverImage}
				className="my-2"
				style={{ width: '100%' }}
				alt="cover"
			/>
			<div className="my-2">
				<p>
					Solution-oriented Full Stack Web Developer known as a diligent
					collaborative problem solver. Worked with multiple teams of 3 to
					create an e-commerce site as well as a blog focused site dedicated to
					displaying the release dates of Marvel films. Eager to become familiar
					in the world of web development and to continue to grow from the work
					to be done.
				</p>
			</div>
		</section>
	);
}

export default About;
