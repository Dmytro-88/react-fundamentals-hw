import { mockedAuthorsList } from '../constants';

function getCourseAuthors(course) {
	const courseAuthors = [];

	course.authors.forEach((idAuthor) => {
		const author = mockedAuthorsList.find((author) => idAuthor === author.id);
		courseAuthors.push(author.name);
	});
	return courseAuthors;
}

export default getCourseAuthors;
