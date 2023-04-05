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
	const [coursesList, setCoursesList] = useState(mockedCoursesList);

	function searchButtonClick(text) {
		if (!text) {
			setCoursesList(mockedCoursesList);
		} else {
			const lowText = text.toLowerCase();
			const newList = mockedCoursesList.filter(
				(course) =>
					course.title.toLowerCase().includes(lowText) ||
					course.id.toLowerCase().includes(lowText)
			);
			setCoursesList(newList);
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
			{coursesList.map((course) => {
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
