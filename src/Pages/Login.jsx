import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { BlackBlockButton } from '../components/AuthComponent';
import InputBox from '../components/InputBox';
import { useAuth } from '../Context/AuthContext';

const Login = () => {
	const { googleLogin, user, login } = useAuth();
	const handleSubmit = e => {
		e.preventDefault();
		login(
			e.target.email.value,
			e.target.password.value
		);
	};

	if (user) {
		return <Navigate to='/' />;
	}
	return (
		<div className='container pt-16'>
			<div className='flex'>
				<div style={{
					width: '60%',
					margin: 'auto',
					padding: '2rem'
				}}>
					<img src='/images/login.png' width='619.36px' alt='' />
				</div>
				<div style={{
					width: '30%',
					marginTop: '3rem',
				}}>
					<div style={{
						backgroundColor: '#fff',
						padding: '2rem',
						borderRadius: '20px',
						boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)'
					}}>
						<h1 className='text-2xl font-medium'>Welcome Back!</h1>
						<form onSubmit={handleSubmit}>
							<div className='my-4'>
								<InputBox title='Username or Email' type='text' name='email' />
							</div>
							<div className='my-6'>
								<InputBox title='Password' type='password' name='password' />
							</div>
							<div className='my-6 text-sm flex'>
								<input type='checkbox' className='mr-4 block w-6' /> Stay Signed in
							</div>
							<BlackBlockButton
								type='submit'
								className='w-full bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700'>
								Login
							</BlackBlockButton>
							<div className='flex gap-4 mt-8'>
								<button className='hover:opacity-9' onClick={googleLogin}>
									<img src='/images/google.png' alt='' />
								</button>
								<button>
									<img src='/images/facebook.svg' alt='' />
								</button>
								<button>
									<img src='/images/apple.png' alt='' />
								</button>
							</div>
						</form>
                    </div>
                    
                    <Link to='/sign-up' className='text-center block mt-4 text-gray-500 text-base font-bold'> 
                        Don't have an account? <span className='text-green-500 hover:underline'>Sign up</span>
                    </Link>
				</div>
			</div>
		</div>
	);
};

export default Login;
