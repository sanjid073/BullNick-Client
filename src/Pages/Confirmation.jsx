import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

const Confirmation = () => {
	const { user ,resendEmailVerification} = useAuth();
	if (user?.emailVerified) {
		return <Navigate to='/' />;
	} else if (!user) {
		return <Navigate to='/sign-up' />;
	}

	return (
		<div className='container pt-16 text-center flex flex-col items-center justify-center'>
			<h2 className='text-5xl font-semibold'>
				Welcome to
				<span className='text-green'> Bull</span>Nice!
			</h2>
			<img src='/images/welcome.svg' className='my-8' alt='' />
			<h2 className='text-3xl font-semibold'>
				We sent a confirmation link to:
			</h2>
			<p className='text-green text-2xl py-4'>{user?.email}</p>
			<p className='text-lg py-4'>
				Haven’t received an email from BullNice yet? Click on
				<br /> resend to receive another e-mail.
			</p>
			<button onClick={resendEmailVerification} className='text-white bg-gray-800 mb-4 px-6 py-3 rounded-lg  md:mt-8 text-xl hover:bg-gray-700'>{'> Resend '}</button>
			<p className='text-xs mb-16'>Refresh the page after confirming you Email!</p>
		</div>
	);
};

export default Confirmation;
