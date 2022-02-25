import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import {
	BlackBlockButton,
	FullWidth,
	GridContainer,
	LinkText,
	SignupTextGrid,
	SignupTextGridItem,
	SmallCenterText
} from '../components/AuthComponent';
import InputBox from '../components/InputBox';
import { useAuth } from '../Context/AuthContext';

const Signup = () => {
	const { googleLogin, facebookLogin, user, register } = useAuth();
	const handleSubmit = e => {
		e.preventDefault();
		register(
			e.target.username.value,
			e.target.email.value,
			e.target.password.value
		);
	};

	if (user) {
		return <Navigate to='/' />;
	}
	return (
		<div className='container'>
			<GridContainer>
				<FullWidth>
					<img src='/images/signup.png' width='100%' alt='' />
					<div>
						<p style={{ fontSize: '1.5rem', marginTop: '10px' }}>
							Investing has never been so fun, safe and easy
						</p>
						<SignupTextGrid>
							<SignupTextGridItem>
								<div className='min-w-max'>
									<img src={`/images/headphone.svg`} width='40px' alt='' />
								</div>
								<div className='w-full text-lg'>
									Customer service is always ready to help you.
								</div>
							</SignupTextGridItem>
							<SignupTextGridItem>
								<div className='min-w-max'>
									<img src={`/images/share.svg`} width='40px' alt='' />
								</div>
								<div className='w-full text-lg'>
									Customer service is always ready to help you.
								</div>
							</SignupTextGridItem>
							<SignupTextGridItem>
								<div className='min-w-max'>
									<img src={`/images/lock.svg`} width='40px' alt='' />
								</div>
								<div className='w-full text-lg'>
									Customer service is always ready to help you.
								</div>
							</SignupTextGridItem>
							<SignupTextGridItem>
								<div className='min-w-max'>
									<img src={`/images/lock.svg`} width='40px' alt='' />
								</div>
								<div className='w-full text-lg'>
									Customer service is always ready to help you.
								</div>
							</SignupTextGridItem>
						</SignupTextGrid>
						<SmallCenterText>
							By signing you will receive marketing emails,
							<br /> which you may unsubscribe from anytime
						</SmallCenterText>
						<LinkText>
						<Link
							to='/login'>
							Already have an account?{' '}
								<span style={{
									color: '#8EC640',
							}}>Sign in</span>
						</Link>
						</LinkText>
					</div>
				</FullWidth>
				<FullWidth>
					<div style={{
						backgroundColor: '#fff',
						padding: '20px',
						borderRadius: '15px',
						boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
					}}>
						<h1 className='text-2xl font-medium'>Get Started Now!</h1>
						<form onSubmit={handleSubmit}>
						<InputBox title='Username' type='text' name='username' />
						<InputBox title='Email' type='email' name='email' />
						<InputBox title='Password' type='password' name='password' />
							<div className='text-sm flex'>
								<input type='checkbox' className='mr-4 block w-6' />I have read
								and I accept the Terms & Conditions of BullNice and Risk
								Disclosure
							</div>
							<BlackBlockButton
								type='submit'>
								Create an Account
							</BlackBlockButton>
							<div className='flex gap-4 mt-8'>
								<button className='hover:opacity-9' onClick={googleLogin}>
									<img src='/images/google.png' alt='' />
								</button>
								<button onClick={facebookLogin}>
									<img src='/images/facebook.svg' alt='' />
								</button>
								<button>
									<img src='/images/apple.png' alt='' />
								</button>
							</div>
						</form>
					</div>
				</FullWidth>
			</GridContainer>
		</div>
	);
};

export default Signup;
