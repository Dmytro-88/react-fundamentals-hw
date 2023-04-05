import { useState } from 'react';
import Button from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Input';
import {
	BTN_TYPE_BUTTON,
	INPUT_TYPE_TEXT,
	SEARCH_BTN_TEXT,
	SEARCH_INPUT_PH,
} from '../../../../constants';

import './SearchBar.css';

function SearchBar(props) {
	const [searchText, setSearchText] = useState('');

	function searchInputChange(e) {
		if (e.target.value === '') {
			props.searchButtonClick('');
		}
		setSearchText(e.target.value);
	}

	return (
		<div className='search-div'>
			<Input
				placeholderText={SEARCH_INPUT_PH}
				inputChange={searchInputChange}
				value={searchText}
				inputType={INPUT_TYPE_TEXT}
			/>
			<Button
				buttonText={SEARCH_BTN_TEXT}
				buttonClick={() => props.searchButtonClick(searchText)}
				buttonType={BTN_TYPE_BUTTON}
			/>
		</div>
	);
}

export default SearchBar;
