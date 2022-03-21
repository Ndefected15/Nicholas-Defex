import React, { useState } from 'react';
import Modal from '../Modal';

const PhotoList = ({ category }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [currentPhoto, setCurrentPhoto] = useState();

	const [photos] = useState([
		{
			name: 'MCU Countdown CLock',
			category: 'portfolio',
			description:
				'A full-stack web application dedicated to displaying the time approaching/since a release of a film from the Marvel Cinematic Universe',
			deployed: 'https://mcu-countdown-clock.herokuapp.com/',
			github: 'https://github.com/Ndefected15/MCU-countdown-clock',
		},
		{
			name: 'Shoe Shop',
			category: 'portfolio',
			description:
				'An E-commerce website dedicated to selling High-End Sneakers',
		},
		{
			name: 'Tech Blogger',
			category: 'portfolio',
			description:
				'A full-stack web application dedicated to forum style communication between users on varius tech related topics',
		},
		{
			name: 'Run Buddy',
			category: 'portfolio',
			description: 'A website that offers fitness training services.',
		},
		{
			name: 'Pro Note App',
			category: 'portfolio',
			description: 'A deployed application that allows users to make notes',
		},
		{
			name: 'Work Day Scheduler',
			category: 'portfolio',
			description:
				'a simple calender application that allows a user to save events',
		},
	]);

	const currentPhotos = photos.filter((photo) => photo.category === category);

	const toggleModal = (image, i) => {
		setCurrentPhoto({ ...image, index: i });
		setIsModalOpen(!isModalOpen);
	};

	return (
		<div>
			{isModalOpen && (
				<Modal onClose={toggleModal} currentPhoto={currentPhoto} />
			)}
			<div className="flex-row">
				{currentPhotos.map((image, i) => (
					<img
						src={require(`../../assets/small/${category}/${i}.png`).default}
						alt={image.name}
						className="img-thumbnail mx-1"
						onClick={() => toggleModal(image, i)}
						key={image.name}
					/>
				))}
			</div>
		</div>
	);
};

export default PhotoList;
