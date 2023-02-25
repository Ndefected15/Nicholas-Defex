import React from 'react';

// import { validateEmail } from '../../utils/helpers';
import {
	Button,
	TextField,
	FormControl,
	createTheme,
	colors,
	Container,
	Grid,
} from '@mui/material';

import { makeStyles, ThemeProvider } from '@mui/styles';

import SendIcon from '@mui/icons-material/Send';

const useStyles = makeStyles({
	root: {
		background: 'linear-gradient(45deg, #FE6B8B, #FF8E53)',
		border: 0,
		borderRadius: 15,
		marginBottom: 15,
		color: 'white',
		padding: '5 30px',
	},
});

// const theme = createTheme({
// 	palette: {
// 		primary: {
// 			main: colors.orange[500],
// 		},
// 	},
// });

function ButtonStyled() {
	const classes = useStyles();
	return <Button className={classes.root}>Test Styled Button</Button>;
}

function ContactForm() {
	// const [formState, setFormState] = useState({
	// 	name: '',
	// 	email: '',
	// 	message: '',
	// });

	// const [errorMessage, setErrorMessage] = useState('');
	// const { name, email, message } = formState;

	// const handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	if (!errorMessage) {
	// 		console.log('Submit Form', formState);
	// 	}
	// };

	// const handleChange = (e) => {
	// 	if (e.target.name === 'email') {
	// 		const isValid = validateEmail(e.target.value);
	// 		if (!isValid) {
	// 			setErrorMessage('Your email is invalid.');
	// 		} else {
	// 			setErrorMessage('');
	// 		}
	// 	} else {
	// 		if (!e.target.value.length) {
	// 			setErrorMessage(`${e.target.name} is required.`);
	// 		} else {
	// 			setErrorMessage('');
	// 		}
	// 	}
	// 	if (!errorMessage) {
	// 		setFormState({ ...formState, [e.target.name]: e.target.value });
	// 		console.log('Handle Form', formState);
	// 	}
	// };

	return (
		// <ThemeProvider theme={theme}>
		<Container maxWidth="xs">
			<section className="centered">
				<FormControl>
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
					{/* <div style={{ height: '4vh' }}> */}
					<ButtonStyled></ButtonStyled>
					{/* <Grid container>
						<Grid>
							<Paper style={{ height: 75, width: 50 }}></Paper>
						</Grid>
						<Grid>
							<Paper style={{ height: 75, width: 50 }}></Paper>
						</Grid>
						<Grid>
							<Paper style={{ height: 75, width: 50 }}></Paper>
						</Grid>
					</Grid> */}
					<TextField
						// type="text"
						// name="name"
						// defaultValue={name}
						// onBlur={handleChange}
						variant="outlined"
						color="secondary"
						type="text"
						label="Name"
					/>
					{/* </div> */}
					{/* <div style={{ height: '3vh' }}> */}

					<TextField
						type="email"
						variant="outlined"
						color="secondary"
						label="Email"
						// name="email"
						// defaultValue={email}
						// onBlur={handleChange}
					/>
					{/* </div> */}
					<div>
						<TextField
							type="text"
							rows="5"
							variant="outlined"
							color="secondary"
							label="Message"
							// defaultValue={message}
							// onBlur={handleChange}
						/>
					</div>
					{/* {errorMessage && (
					<div>
						<p className="error-text">{errorMessage}</p>
					</div>
				)} */}

					<Button
						endIcon={<SendIcon />}
						variant="contained"
						color="secondary"
						type="submit"
					>
						Submit
					</Button>
				</FormControl>
			</section>
		</Container>
		// </ThemeProvider>
	);
}

export default ContactForm;
