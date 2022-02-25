import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';
import {
	OrderConfirmImage,
	OrderConfirmText,
	OrderConfirmTitle,
	SuccessSubTitle,
	SuccessTitle
} from './PaymentComponent';

const PaymentSuccess = () => {
	const { user } = useAuth();
	const navigate = useNavigate();
	const [info, setInfo] = React.useState(null);
	useEffect(() => {
		fetch('https://still-shore-10428.herokuapp.com/payment/success')
			.then(res => res.json())
			.then(data => {
				setInfo(data);
				console.log(data);
				if (data.error) {
					navigate('/home');
				}
			});
	}, [navigate]);

	return (
		<div className='container py-8'>
			<div className='grid grid-cols-1 md:grid-cols-2 items-center'>
				<div>
					<SuccessTitle>congratulations!</SuccessTitle>
					<SuccessSubTitle>
						Welcome to the BullNice family! We will take from here. We sent a
						confirmation e-mail at {user?.email} Below you will find all
						information about your order.
					</SuccessSubTitle>
				</div>
				<div>
					<img src='/images/success.png' className='w-full' alt='Success' />
				</div>
			</div>

			<p className='text-center'>
				<OrderConfirmImage
					src='/images/order-confirm.svg'
					className='mx-auto'
					alt=''
				/>
			</p>

			<div className='my-6'>
				<OrderConfirmTitle>Details</OrderConfirmTitle>
				<OrderConfirmText>
					Your order number is <span>#{info?.id}</span>
				</OrderConfirmText>
				<OrderConfirmText>
					You purchased the <span>Annually Membership Plan</span>
				</OrderConfirmText>
				<OrderConfirmText>
					You will be charged total <span> €{info?.amount.value}</span>
				</OrderConfirmText>
			</div>
		</div>
	);
};

export default PaymentSuccess;
