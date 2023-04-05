import Button from '../../common/Button/Button';
import Logo from './components/Logo/Logo';
import { LOGOUT_BTN_TEXT, USER_NAME } from '../../constants';

import './Header.css';

function Header() {
	function logoutButtonClick() {
		console.log('Logout button click');
	}

	return (
		<header>
			<Logo />
			<div className='name-button-wrap'>
				<h3>{USER_NAME}</h3>
				<Button buttonText={LOGOUT_BTN_TEXT} buttonClick={logoutButtonClick} />
			</div>
		</header>
	);
}

export default Header;
