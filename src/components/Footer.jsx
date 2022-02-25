import React from 'react';
import { Link } from 'react-router-dom';
import {
	BlackBox,
	Copyright,
	Description,
	FooterLink,
	Line,
	LinkTitle,
	Social
} from './FooterComponents';

const Footer = () => {
	return (
		<BlackBox>
			<div className='container mt-12'>
				<div className='grid grid-cols-1 lg:grid-cols-7 gap-4'>
					<div className='w-full text-center md:text-left md:col-span-2 pr-12'>
						<img src='/images/footer-logo.svg' width='147.px' alt='' />
						<Description>
							Bullnice makes your investment experience as easy as possible by
							bringing all financial information in one place.
						</Description>
					</div>
					<div className='w-full text-center md:text-left'>
						<LinkTitle>PREMIUM</LinkTitle>
						<ul>
							<li>
								<Link to='/'>
									<FooterLink>Trading Algorithms</FooterLink>
								</Link>
							</li>
							<li>
								<Link to='/'>
									<FooterLink>Financial information</FooterLink>
								</Link>
							</li>
						</ul>
					</div>
					<div className='w-full text-center md:text-left'>
						<LinkTitle>RESOURCES</LinkTitle>
						<ul>
							<li>
								<Link to='/'>
									<FooterLink>LEARN</FooterLink>
								</Link>
							</li>
						</ul>
					</div>
					<div className='w-full text-center md:text-left'>
						<LinkTitle>SUPPORT</LinkTitle>
						<ul>
							<li>
								<Link to='/'>
									<FooterLink>Help Desk</FooterLink>
								</Link>
							</li>
							<li>
								<Link to='/'>
									<FooterLink>FAQ</FooterLink>
								</Link>
							</li>
							<li>
								<Link to='/'>
									<FooterLink>Contact Support</FooterLink>
								</Link>
							</li>
						</ul>
					</div>
					<div className='w-full text-center md:text-left'>
						<LinkTitle>ACCOUNT</LinkTitle>
						<ul>
							<li>
								<Link to='/'>
									<FooterLink>Signup</FooterLink>
								</Link>
							</li>
							<li>
								<Link to='/'>
									<FooterLink>Signin</FooterLink>
								</Link>
							</li>
						</ul>
					</div>
					<div className='w-full text-center md:text-left'>
						<LinkTitle>PRIVACY AND REGULATION</LinkTitle>
						<ul>
							<li>
								<Link to='/'>
									<FooterLink>Terms and Conditions</FooterLink>
								</Link>
							</li>
							<li>
								<Link to='/'>
									<FooterLink>Privacy Statement</FooterLink>
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<Line />
				<Copyright>Copyright ©2021 All rights reserved | Bullnice</Copyright>
				<Social>
					<h3>FIND US ON!</h3>
					<div className='icons'>
						<a href='/' target='_blank'>
							<img src='/images/facebook.png' alt='Facebook' />
						</a>
						<a href='/' target='_blank'>
							<img src='/images/twitter.png' alt='Twitter' />
						</a>
						<a href='/' target='_blank'>
							<img src='/images/youtube.png' alt='Youtube' />
						</a>
						<a href='/' target='_blank'>
							<img src='/images/instagram.png' alt='Instagram' />
						</a>
						<a href='/' target='_blank'>
							<img src='/images/twitch.png' alt='Twitch' />
						</a>
						<a href='/' target='_blank'>
							<img src='/images/linkedIn.png' alt='LinkedIn' />
						</a>
					</div>
				</Social>
			</div>
		</BlackBox>
	);
};

export default Footer;
