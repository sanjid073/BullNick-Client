import React from 'react';
import { InputItem } from './AuthComponent';

const InputBox = ({title, type, name}) => {
	return (
		<InputItem>
			<label className='mb-2 block'>{title}</label>
			<input
				type={type}
				name={name}
				required
				className='w-full p-2 border-2 border-gray-400 rounded-lg'
			/>
		</InputItem>
	);
};

export default InputBox;
