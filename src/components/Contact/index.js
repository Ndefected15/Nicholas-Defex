import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

function ContactForm() {
	const [formState, setFormState] = useState({
		name: '',
		email: '',
		message: '',
	});

	const [errorMessage, setErrorMessage] = useState('');
	const { name, email, message } = formState;

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!errorMessage) {
			console.log('Submit Form', formState);
		}
	};

	const handleChange = (e) => {
		if (e.target.name === 'email') {
			const isValid = validateEmail(e.target.value);
			if (!isValid) {
				setErrorMessage('Your email is invalid.');
			} else {
				setErrorMessage('');
			}
		} else {
			if (!e.target.value.length) {
				setErrorMessage(`${e.target.name} is required.`);
			} else {
				setErrorMessage('');
			}
		}
		if (!errorMessage) {
			setFormState({ ...formState, [e.target.name]: e.target.value });
			console.log('Handle Form', formState);
		}
	};

	return (
		<section className="centered">
			<form id="contact-form" onSubmit={handleSubmit}>
				<div>
					<h1
						data-testid="h1tag"
						className="centered"
						style={{ height: '20vh' }}
					>
						Contact me
						<br></br>
						NicholasDefex@gmail.com
					</h1>
				</div>
				<div style={{ height: '4vh' }}>
					<label htmlFor="name">Name </label>
					<input
						type="text"
						name="name"
						defaultValue={name}
						onBlur={handleChange}
					/>
				</div>
				<div style={{ height: '3vh' }}>
					<label htmlFor="email">Email </label>
					<input
						type="email"
						name="email"
						defaultValue={email}
						onBlur={handleChange}
					/>
				</div>
				<div>
					<label htmlFor="message">Message:</label>
					<textarea
						name="message"
						rows="5"
						defaultValue={message}
						onBlur={handleChange}
					/>
				</div>
				{errorMessage && (
					<div>
						<p className="error-text">{errorMessage}</p>
					</div>
				)}
				<button data-testid="button" type="submit">
					Submit
				</button>
			</form>
		</section>
	);
}

export default ContactForm;
