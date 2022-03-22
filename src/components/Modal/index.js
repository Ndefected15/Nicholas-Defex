import React from 'react';

const Modal = ({ onClose, currentPhoto }) => {
	const { name, description, category, github, deployed, index } = currentPhoto;

	return (
		<div className="modalBackdrop">
			<div className="modalContainer">
				<h3 className="modalTitle">{name} </h3>
				<img
					src={require(`../../assets/large/${category}/${index}.png`).default}
					alt="current category"
				/>
				<p>{description}</p>
				<a href={deployed}>Deployed Application</a>
				<br />
				<a href={github}> Github</a>
				<br />
				<br />
				<button type="button" onClick={onClose}>
					Close this modal
				</button>
			</div>
		</div>
	);
};

export default Modal;
