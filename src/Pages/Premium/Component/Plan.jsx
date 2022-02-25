import React from 'react';
import { Link } from 'react-router-dom';
import { usePayment } from '../../../Context/PaymentContext';
import {
	BlueBox,
	PlanBlueButton,
	PlanDescription,
	PlanGrayButton
} from './PremiumComponent';

const Plan = ({ amount, duration, monthly, name, save, product }) => {
	const { setPayment } = usePayment();
	return (
		<div>
			<div className='shadow-xl bg-white rounded-xl scale-90 hover:scale-100'>
				<BlueBox className=' p-6'>
					<div className='flex justify-between items-center'>
						<h2 className='text-3xl'>Monthly</h2>
					</div>
					<h2 className='text-2xl text-center mt-6'>
						€<span className='text-5xl'>{amount}</span>/{name}
					</h2>
				</BlueBox>
				<PlanDescription>Billed €{monthly} every month</PlanDescription>
				<p className='text-center mb-4'>
					<PlanBlueButton
						onClick={() =>
							setPayment({
								date: `${
									new Date().getMonth() + 1
								}-${new Date().getDate()}-${new Date().getFullYear()}`,
								amount,
								duration,
								product,
								save,
							})
						}>
						<Link to='/payment'>Get {duration}-month plan</Link>
					</PlanBlueButton>
				</p>
				<p className='text-center pb-8'>
					<PlanGrayButton>Save {save}%</PlanGrayButton>
				</p>
			</div>
		</div>
	);
};

export default Plan;
