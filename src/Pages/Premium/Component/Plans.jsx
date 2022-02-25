import React from 'react';
import Plan from './Plan';
import PlanRecommended from './PlanRecommended';

const Plans = ({ product }) => {

	return (
		<div className='grid xs:grid-cols-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center'>
			<PlanRecommended product={product} />
			<Plan
				monthly='9,50'
				amount={57.00}
				name='biannually'
				save={5}
                duration={6}
                product={product}
			/>
			<Plan
				monthly='8,99'
				amount={107.88}
				name='annually'
				save={10}
				duration={12}
                product={product}
			/>
		</div>
	);
};

export default Plans;
