import { mockedAuthorsList } from '../constants';

function getCourseAuthors(authors) {
	const courseAuthors = mockedAuthorsList.filter((author) =>
		authors.includes(author.id)
	);
	return courseAuthors;
}

export default getCourseAuthors;
