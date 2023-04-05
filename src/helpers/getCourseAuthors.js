import { mockedAuthorsList } from '../constants';

function getCourseAuthors(course) {
	const courseAuthors = mockedAuthorsList
		.filter((author) => course.authors.includes(author.id))
		.map((author) => author.name);
	return courseAuthors;
}

export default getCourseAuthors;
