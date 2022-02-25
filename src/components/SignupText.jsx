import React from 'react';

const SignupText = ({ icon, text }) => {
	return (
		<div className='flex gap-4'>
			<div className='min-w-max'>
				<img src={`/images/${icon}.svg`} width='40px' alt='' />
            </div>
            <div className="w-full text-lg">
                {text}
            </div>
		</div>
	);
};

export default SignupText;
