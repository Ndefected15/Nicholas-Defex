import React from 'react';
import coverImage from '../../../public/cover/cover-image.jpg';

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
					Hello, I am an aspiring Web Devloper. I attended a coding bootcamp
					through Rutgers University from Oct. 2021 - April 2022. My interests
					are Music, Technology, Nature and Working where I can to better myself
					and the world around me.
				</p>
			</div>
		</section>
	);
}

export default About;
