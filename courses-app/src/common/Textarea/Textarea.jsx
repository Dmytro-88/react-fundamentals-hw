import './Textarea.css';

function Textarea(props) {
	const {
		labelText,
		labelFor,
		textareaName,
		placeholderText,
		value,
		innerRef,
	} = {
		...props,
	};
	return (
		<div className='textarea-wrap'>
			<label htmlFor={labelFor}>{labelText}</label>
			<textarea
				className='textarea'
				placeholder={placeholderText}
				value={value}
				ref={innerRef}
				name={textareaName}
				id={textareaName}
			/>
		</div>
	);
}

export default Textarea;
