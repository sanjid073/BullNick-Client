import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';
import { usePayment } from '../../Context/PaymentContext';
import {
	PaySubTitle,
	PayTitle,
	Timeline,
} from '../Premium/Component/PremiumComponent';
import {
	Line,
	OrderBox,
	OrderBoxHeader,
	OrderBoxInput,
	OrderBoxTitleText,
	OrderInfoText,
	OrderInfoTextGreen,
	OrderInputTitle,
	PaymentIcon,
} from './PaymentComponent';

const Payment = () => {
	const { payment } = usePayment();
	const { user } = useAuth();
	const navigate = useNavigate();
	const [paymentInfo, setPaymentInfo] = React.useState(null);
	console.log(user);
	useEffect(() => {
		if (!payment) {
			navigate('/home');
		} else {
			fetch('https://still-shore-10428.herokuapp.com/payment', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					payment: payment,
				}),
			})
				.then(res => res.json())
				.then(data => {
					setPaymentInfo(data);
				});
		}
	}, [navigate, payment]);
	return (
		<div className='container'>
			<div className='text-center py-12'>
				<PayTitle>Secure Payment</PayTitle>
				<PaySubTitle>
					Make your payment in the most secure way when upgrading your account
					to a premium account. Your payment methods are designed for your
					safety.
				</PaySubTitle>
				<Timeline src='/images/timeline2.svg' />
			</div>
			<div className='flex gap-12'>
				<div className='w-full'>
					<OrderInputTitle>Email Address</OrderInputTitle>
					<OrderBoxInput type='text' placeholder={user?.email} />
					<div className='flex gap-6 mt-8'>
						<div className='w-1/2'>
							<OrderInputTitle>Password</OrderInputTitle>
							<OrderBoxInput type='password' placeholder='•••••••' />
						</div>
						<div className='w-1/2'>
							<OrderInputTitle>Confirm Password</OrderInputTitle>
							<OrderBoxInput type='password' placeholder='•••••••' />
						</div>
					</div>

					<OrderBoxTitleText>
						Choose a payment method (Clik one of the options below)
					</OrderBoxTitleText>

					<div className='flex justify-center my-6'>
						<div className='grid grid-cols-4 gap-6'>
							<div className='flex flex-col items-center'>
								<PaymentIcon>
									<a href={paymentInfo?._links.checkout.href}>
										<img src='/images/visa.png' alt='visa' />
									</a>
								</PaymentIcon>
								<p className='text-gray-400 text-xs'>Pay with credit card</p>
							</div>
							<div className='flex flex-col items-center'>
								<PaymentIcon>
									<a href={paymentInfo?._links.checkout.href}>
										<img src='/images/mastercard.svg' alt='visa' />
									</a>
								</PaymentIcon>
								<p className='text-gray-400 text-xs'>Pay with credit card</p>
							</div>
							<div className='flex flex-col items-center'>
								<PaymentIcon>
									<a href={paymentInfo?._links.checkout.href}>
										<img src='/images/ideal.png' alt='visa' />
									</a>
								</PaymentIcon>
								<p className='text-gray-400 text-xs'>Pay with credit card</p>
							</div>
							<div className='flex flex-col items-center'>
								<PaymentIcon>
									<a href={paymentInfo?._links.checkout.href}>
										<img src='/images/PayPal.png' alt='visa' />
									</a>
								</PaymentIcon>
								<p className='text-gray-400 text-xs'>Pay with credit card</p>
							</div>
							<div className='flex flex-col items-center'>
								<PaymentIcon>
									<a href={paymentInfo?._links.checkout.href}>
										<img src='/images/amazon.png' alt='visa' />
									</a>
								</PaymentIcon>
								<p className='text-gray-400 text-xs'>Pay with credit card</p>
							</div>
							<div className='flex flex-col items-center'>
								<PaymentIcon>
									<a href={paymentInfo?._links.checkout.href}>
										<img src='/images/ApplePay.png' alt='visa' />
									</a>
								</PaymentIcon>
								<p className='text-gray-400 text-xs'>Pay with credit card</p>
							</div>
							<div className='flex flex-col items-center'>
								<PaymentIcon>
									<a href={paymentInfo?._links.checkout.href}>
										<img src='/images/GooglePay.png' alt='visa' />
									</a>
								</PaymentIcon>
								<p className='text-gray-400 text-xs'>Pay with credit card</p>
							</div>
							<div className='flex flex-col items-center'>
								<PaymentIcon>
									<a href={paymentInfo?._links.checkout.href}>
										<img src='/images/Bitcoin.png' alt='visa' />
									</a>
								</PaymentIcon>
								<p className='text-gray-400 text-xs'>Pay with credit card</p>
							</div>
						</div>
					</div>
				</div>
				<div className='min-w-max '>
					<OrderBox className='mb-8'>
						<OrderBoxHeader>Order Summary</OrderBoxHeader>
						<Line />
						<div className='flex'>
							<div className='w-1/2'>
								<div className='text-left'>
									<OrderInfoText>Date</OrderInfoText>
									<OrderInfoText>Duration</OrderInfoText>
									<OrderInfoText>Product</OrderInfoText>
									<OrderInfoText>Price</OrderInfoText>
									<OrderInfoTextGreen>Discount</OrderInfoTextGreen>
								</div>
							</div>
							<div className='w-1/2'>
								<div className='text-left'>
									<OrderInfoText>{payment?.date}</OrderInfoText>
									<OrderInfoText>
										Premium {payment?.duration} months
									</OrderInfoText>
									<OrderInfoText>{payment?.product}</OrderInfoText>
									<OrderInfoText>€{payment?.amount}</OrderInfoText>
									<OrderInfoTextGreen>
										-€
										{((payment?.amount / 100) * payment?.save).toFixed(2)}
										<br />
										<span className='text-sm'>
											(€
											{(
												((payment?.amount / 100) * payment?.save) /
												payment?.duration
											).toFixed(3)}{' '}
											x {payment?.duration} months)
										</span>
									</OrderInfoTextGreen>
								</div>
							</div>
						</div>
						<Line />
						<div className='flex items-center'>
							<div className='w-1/2'>
								<div className='text-left'>
									<OrderInfoText>Total</OrderInfoText>
								</div>
							</div>
							<div className='w-1/2'>
								<div className='text-left'>
									€
									{(
										payment?.amount -
										(payment?.amount / 100) * payment?.save
									).toFixed(2)}
								</div>
							</div>
						</div>
					</OrderBox>
				</div>
			</div>
		</div>
	);
};

export default Payment;
