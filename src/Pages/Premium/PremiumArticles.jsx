import React from 'react';
import Plans from './Component/Plans';
import {
	PaySubTitle,
	PayTitle,
	PlanTitle,
	PremiumSubTitle,
	PremiumTitle,
	Timeline
} from './Component/PremiumComponent';

const PremiumArticles = () => {
	return (
		<div className='container pb-80'>
			<div
				style={{
					margin: '300px 0',
				}}>
				<PremiumTitle>READ OUR PREMIUM ARTICLES</PremiumTitle>
				<PremiumSubTitle>
					Let our Premium Articles help your Trading Experience
				</PremiumSubTitle>
			</div>
			<div className='text-center'>
				<PayTitle>Secure Payment</PayTitle>
				<PaySubTitle>
					Make your payment in the most secure way when upgrading your account
					to a premium account. Your payment methods are designed for your
					safety.
				</PaySubTitle>
				<Timeline src='/images/timeline1.svg' />
			</div>
			<PlanTitle>
				<span className='underline'>Choose</span> Your Plan
			</PlanTitle>
			<Plans product='Financial information' />
		</div>
	);
};

export default PremiumArticles;
