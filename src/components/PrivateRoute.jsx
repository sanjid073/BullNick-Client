import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

const PrivateRoute = ({ children }) => {
	const { loading, user } = useAuth();
	if (loading)
		return (
			<div className='p-8 text-xl text-center'>
				Loading...
			</div>
		);
	if (!user?.emailVerified) return <Navigate to='/confirm' />;
	return <div>{user ? children : <Navigate to='/sign-up' />}</div>;
};

export default PrivateRoute;
