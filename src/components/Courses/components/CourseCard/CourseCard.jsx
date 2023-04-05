import Button from '../../../../common/Button/Button';
import { SHOW_COURSE_BTN_TEXT } from '../../../../constants';
import getCourseDuration from '../../../../helpers/getCourseDuration';
import getDatePoint from '../../../../helpers/getDatePoint';

import './CourseCard.css';

function CoursesCard(props) {
	const { title, description, creationDate, duration, authorsNameList } = props;

	const courseDuration = getCourseDuration(duration);
	const authors = authorsNameList.join(', ');
	const creationDatePoint = getDatePoint(creationDate);

	function showCourseButtonClick() {
		console.log('Show course button click');
	}

	return (
		<article className='course-card'>
			<div>
				<h2>{title}</h2>
				<p>{description}</p>
			</div>
			<div className='course-info'>
				<p className='overflow'>
					<b>Authors: </b>
					{authors}
				</p>
				<p>
					<b>Duration: </b>
					{courseDuration} hours
				</p>
				<p>
					<b>Creation: </b>
					{creationDatePoint}
				</p>
				<Button
					buttonText={SHOW_COURSE_BTN_TEXT}
					buttonClick={showCourseButtonClick}
				/>
			</div>
		</article>
	);
}

export default CoursesCard;
