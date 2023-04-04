import './Button.css';

function Button(props) {
	return (
		<button className='btn' type={props.buttonType} onClick={props.buttonClick}>
			{props.buttonText}
		</button>
	);
}

export default Button;
