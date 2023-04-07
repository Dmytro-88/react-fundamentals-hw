import { useState } from 'react';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';

import './App.css';

function App() {
	const [isCreateCourseRoute, setIsCreateCourseRoute] = useState(false);

	function toggleRoute() {
		setIsCreateCourseRoute(!isCreateCourseRoute);
	}

	return (
		<>
			<Header />
			{isCreateCourseRoute ? (
				<CreateCourse createCourseClick={toggleRoute} />
			) : (
				<Courses addNewCourseClick={toggleRoute} />
			)}
		</>
	);
}

export default App;
