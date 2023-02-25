import React from 'react';
import '../Modal/Modal.css';

const Modal = ({ onClose, currentPhoto }) => {
	const { name, description, category, github, deployed, index } = currentPhoto;

	return (
		<div className="modalBackdrop">
			<div className="modalContainer">
				<h3 className="modalTitle">{name} </h3>
				<img
					className="py-2"
					src={require(`../../assets/large/${category}/${index}.png`).default}
					alt="current category"
				/>
				<p className="py-2">{description}</p>
				<a href={deployed}>Deployed Application</a>

				<a href={github}> Github</a>
				<div className="py-2">
					<button type="button" onClick={onClose}>
						Close this modal
					</button>
				</div>
			</div>
		</div>
	);
};

export default Modal;
