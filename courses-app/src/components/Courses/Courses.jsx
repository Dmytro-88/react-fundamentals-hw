import { useState } from 'react';

import CoursesCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';
import Button from '../../common/Button/Button';
import {
	ADD_NEW_BTN_TEXT,
	BTN_TYPE_BUTTON,
	mockedCoursesList,
} from '../../constants';
import getCourseAuthors from '../../helpers/getCourseAuthors';

import './Courses.css';

function Courses(props) {
	const [renderCoursesList, setRenderCourseList] = useState(mockedCoursesList);

	function searchButtonClick(text) {
		if (text === '') {
			setRenderCourseList(mockedCoursesList);
		} else {
			const newList = [];
			const lowText = text.toLowerCase();
			mockedCoursesList.forEach((course) =>
				course.title.toLowerCase().includes(lowText) ||
				course.id.toLowerCase().includes(lowText)
					? newList.push(course)
					: true
			);
			setRenderCourseList(newList);
		}
	}

	return (
		<section className='courses'>
			<div className='top-bar'>
				<SearchBar searchButtonClick={searchButtonClick} />
				<Button
					buttonText={ADD_NEW_BTN_TEXT}
					buttonClick={() => props.addNewCourseClick()}
					buttonType={BTN_TYPE_BUTTON}
				/>
			</div>
			{renderCoursesList.map((course) => {
				const courseAuthors = getCourseAuthors(course);
				return (
					<CoursesCard
						key={course.id}
						authorsNameList={courseAuthors}
						{...course}
					/>
				);
			})}
		</section>
	);
}

export default Courses;
