import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import { NavBarContainer } from './NavbarComponents';

const NavBar = () => {
	const { user, logout } = useAuth();
	return (
		<div className='container py-4'>
			<NavBarContainer>
				<div>
					<Link to='/'>
						<img src='/images/logo.png' width='140px' alt='' />
					</Link>
				</div>
				<ul >
					<Link to='/'>
						<img src='/images/home.svg' alt='' />
						Home
					</Link>
					<Link
						to='/premium'>
						Premium
						<img src='/images/down.svg' alt='' />
						<ul>
							<li>
								<Link
									to='/premium-algorithms'>
									Trading Algorithms
								</Link>
							</li>
							<li>
								<Link
									to='/premium-articles'>
									Financial information
								</Link>
							</li>
						</ul>
					</Link>
					<Link to='/'>
						Recourses
						<img src='/images/down.svg' alt='' />
					</Link>
					<Link to='/'>
						Customer Service
						<img src='/images/headphone.svg' alt='' />
					</Link>
				</ul>
				<div className='flag'>
					<div>
						<img src='/images/down.svg' width='15px' alt='' />
						<img src='/images/flag.svg' className='block' width='25px' alt='' />
					</div>
					{!user ? (
						<>
							<button><Link to='/login'>Login</Link></button>
							<button className='black-btn'>
								<Link to='/sign-up'>Join Now!</Link>
							</button>
						</>
					) : (
						<button onClick={logout}>
							Logout
						</button>
					)}
				</div>
			</NavBarContainer>
		</div>
	);
};

export default NavBar;
