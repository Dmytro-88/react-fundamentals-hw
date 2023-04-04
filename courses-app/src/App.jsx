import { useState } from 'react';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';

import './App.css';

function App() {
	const [isCreateCourse, setIsCreateCourse] = useState(false);

	function switchCourseCreateCourse() {
		setIsCreateCourse(!isCreateCourse);
	}

	return (
		<>
			<Header />
			{isCreateCourse ? (
				<CreateCourse createCourseClick={switchCourseCreateCourse} />
			) : (
				<Courses addNewCourseClick={switchCourseCreateCourse} />
			)}
		</>
	);
}

export default App;
