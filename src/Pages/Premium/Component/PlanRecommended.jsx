import React from 'react';
import { Link } from 'react-router-dom';
import { usePayment } from '../../../Context/PaymentContext';
import {
	GreenBox,
	PlanDescription,
	PlanGrayButton,
	PlanGreenButton
} from './PremiumComponent';

const PlanRecommended = ({product}) => {
	const {setPayment} = usePayment();

	return (
		<div className='shadow-xl bg-white rounded-xl scale-90 hover:scale-100'>
			<GreenBox className=' p-6'>
				<div className='flex justify-between items-center'>
					<h2 className='text-3xl'>Monthly</h2>
					<i className='fa-solid fa-circle-check'></i>
				</div>
				<h2 className='text-2xl text-center mt-6'>
					€<span className='text-5xl'>9.99</span>/month
				</h2>
			</GreenBox>
			<PlanDescription>Billed €9.99 every month</PlanDescription>
			<p className='text-center mb-4'>
				<PlanGreenButton onClick={() => setPayment({
								date: `${
									new Date().getMonth() + 1
								}-${new Date().getDate()}-${new Date().getFullYear()}`,
								amount:9.99,
								duration:1,
								product,
								save:'0',
							})}>
					<Link to='/payment'>Get 1-month plan</Link>
				</PlanGreenButton>
			</p>
			<p className='text-center pb-8'>
				<PlanGrayButton>Save 0%</PlanGrayButton>
			</p>
		</div>
	);
};

export default PlanRecommended;
