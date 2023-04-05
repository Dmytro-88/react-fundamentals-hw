import logo from './logo.png';
import './Logo.css';
import { LOGO_ALT } from '../../../../constants';

function Logo() {
	return <img src={logo} alt={LOGO_ALT}></img>;
}

export default Logo;
