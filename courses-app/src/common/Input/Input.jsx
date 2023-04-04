import './Input.css';

function Input(props) {
	const {
		labelText,
		labelFor,
		inputType,
		inputName,
		placeholderText,
		inputChange,
		value,
		innerRef,
	} = {
		...props,
	};
	return (
		<div className='input-wrap'>
			<label htmlFor={labelFor}>{labelText}</label>
			<input
				className='input'
				type={inputType}
				placeholder={placeholderText}
				onChange={inputChange}
				value={value}
				ref={innerRef}
				name={inputName}
				id={inputName}
			/>
		</div>
	);
}

export default Input;
