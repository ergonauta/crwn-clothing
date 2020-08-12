import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {Container, Title, Buttons} from './sign-in.styles';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

class SignIn extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: ''
		}
	}

	handleSubmit = async event => {
		event.preventDefault();

		const { email, password } = this.state;

		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({ email: '', password: '' });

		} catch (error) {
			console.error(error);
		}
	}

	handleChange = event => {
		const { value, name } = event.target;

		this.setState({ [name]: value });
	}

	render() {
		return (
			<Container>
				<Title>I already have an account</Title>
				<span>Sign in with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						type="email"
						name='email'
						value={this.state.email}
						onChange={this.handleChange}
						required
						label='Email'
					/>
					<FormInput
						type="password"
						name='password'
						value={this.state.password}
						onChange={this.handleChange}
						required
						label='Password'
					/>

					<Buttons>
						<CustomButton type='submit'>Sign In</CustomButton>
						<CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
					</Buttons>
				</form>
			</Container>
		)
	}
}

export default SignIn;