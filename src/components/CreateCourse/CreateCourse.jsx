import React, { useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import Textarea from '../../common/Textarea/Textarea';
import getCourseDuration from '../../helpers/getCourseDuration';
import {
	ADD_AUTHOR_BTN_TEXT,
	ADD_AUTHOR_INPUT_NAME,
	ADD_AUTHOR_INPUT_PH,
	ADD_AUTHOR_LABEL_TEXT,
	BTN_TYPE_BUTTON,
	BTN_TYPE_SUBMIT,
	CREATE_AUTHOR_BTN_TEXT,
	CREATE_COURSE_BTN_TEXT,
	DELETE_AUTHOR_BTN_TEXT,
	DESCRIPTION_LABEL_TEXT,
	DESCRIPTION_TEXTAREA_NAME,
	DESCRIPTION_TEXTAREA_PH,
	DURATION_INPUT_NAME,
	DURATION_INPUT_PH,
	DURATION_LABEL_TEXT,
	INPUT_TYPE_NUMBER,
	INPUT_TYPE_TEXT,
	TITLE_INPUT_NAME,
	TITLE_INPUT_PH,
	TITLE_LABEL_TEXT,
	mockedAuthorsList,
	mockedCoursesList,
} from '../../constants';

import './CreateCourse.css';

function CreateCourse(props) {
	const titleContainer = useRef(null);
	const descriptionContainer = useRef(null);
	const newAuthorContainer = useRef(null);

	const [duration, setDuration] = useState('');
	const [allAuthorsList, setAllAuthorsList] = useState(mockedAuthorsList);
	const [courseAuthorsList, setCourseAuthorsList] = useState([]);

	function onSubmitForm(e) {
		e.preventDefault();
		const title = titleContainer.current.value;
		const description = descriptionContainer.current.value;
		const creationDate = new Date().toLocaleDateString('am-ET');
		const authors = courseAuthorsList.map((author) => author.id);
		if (
			title.length >= 2 &&
			description.length >= 2 &&
			authors.length >= 1 &&
			String(duration) >= 1
		) {
			const newCourse = {
				id: uuidv4(),
				title,
				description,
				creationDate,
				duration,
				authors,
			};
			mockedCoursesList.push(newCourse);
			props.createCourseClick();
		} else {
			alert('Please, fill in all fields!');
		}
	}

	function createAuthorClick() {
		const authorName = newAuthorContainer.current.value;
		if (authorName.length >= 2) {
			const newAuthor = { id: uuidv4(), name: authorName };
			setAllAuthorsList([...allAuthorsList, newAuthor]);
			newAuthorContainer.current.value = '';
			mockedAuthorsList.push(newAuthor);
		}
	}

	function addAuthorClick(id) {
		const courseAuthor = allAuthorsList.find((author) => author.id === id);
		const listWithoutCourseAuthor = allAuthorsList.filter(
			(author) => author.id !== courseAuthor.id
		);
		setAllAuthorsList(listWithoutCourseAuthor);
		setCourseAuthorsList([...courseAuthorsList, courseAuthor]);
	}

	function deleteAuthorClick(id) {
		const deleteAuthor = courseAuthorsList.find((author) => author.id === id);
		const listWithoutCourseAuthor = courseAuthorsList.filter(
			(author) => author.id !== deleteAuthor.id
		);
		setCourseAuthorsList(listWithoutCourseAuthor);
		setAllAuthorsList([...allAuthorsList, deleteAuthor]);
	}

	function durationInputChange(e) {
		setDuration(e.target.value);
	}

	return (
		<section className='create-course'>
			<form className='form' onSubmit={onSubmitForm}>
				<div className='first-row'>
					<Input
						labelText={TITLE_LABEL_TEXT}
						labelFor={TITLE_INPUT_NAME}
						inputType={INPUT_TYPE_TEXT}
						inputName={TITLE_INPUT_NAME}
						placeholderText={TITLE_INPUT_PH}
						innerRef={titleContainer}
					/>
					<Button
						buttonText={CREATE_COURSE_BTN_TEXT}
						buttonType={BTN_TYPE_SUBMIT}
					/>
				</div>
				<div className='second-row'>
					<Textarea
						labelText={DESCRIPTION_LABEL_TEXT}
						labelFor={DESCRIPTION_TEXTAREA_NAME}
						inputName={DESCRIPTION_TEXTAREA_NAME}
						placeholderText={DESCRIPTION_TEXTAREA_PH}
						innerRef={descriptionContainer}
					/>
				</div>
				<div className='third-row'>
					<div>
						<div className='add-author-wrap'>
							<h3>Add author</h3>
							<Input
								labelText={ADD_AUTHOR_LABEL_TEXT}
								labelFor={ADD_AUTHOR_INPUT_NAME}
								inputType={INPUT_TYPE_TEXT}
								inputName={ADD_AUTHOR_INPUT_NAME}
								placeholderText={ADD_AUTHOR_INPUT_PH}
								innerRef={newAuthorContainer}
							/>
							<Button
								buttonText={CREATE_AUTHOR_BTN_TEXT}
								buttonType={BTN_TYPE_BUTTON}
								buttonClick={createAuthorClick}
							/>
						</div>
						<div className='duration-wrap'>
							<h3>Duration</h3>
							<Input
								labelText={DURATION_LABEL_TEXT}
								labelFor={DURATION_INPUT_NAME}
								inputChange={durationInputChange}
								value={duration}
								inputType={INPUT_TYPE_NUMBER}
								inputName={DURATION_INPUT_NAME}
								placeholderText={DURATION_INPUT_PH}
							/>
							<p>
								Duration: <b>{getCourseDuration(duration)}</b> hours
							</p>
						</div>
					</div>
					<div>
						<div className='authors-wrap'>
							<h3>Authors</h3>
							{allAuthorsList.map((author) => {
								return (
									<div className='author-wrap' key={author.id}>
										<p>{author.name}</p>
										<Button
											buttonText={ADD_AUTHOR_BTN_TEXT}
											buttonType={BTN_TYPE_BUTTON}
											buttonClick={() => addAuthorClick(author.id)}
										/>
									</div>
								);
							})}
						</div>
						<div className='course-authors'>
							<h3>Course Authors</h3>
							{courseAuthorsList.length === 0 ? (
								<p>Author list is empty</p>
							) : (
								courseAuthorsList.map((author) => {
									return (
										<div className='course-author-wrap' key={author.id}>
											<p>{author.name}</p>
											<Button
												buttonText={DELETE_AUTHOR_BTN_TEXT}
												buttonType={BTN_TYPE_BUTTON}
												buttonClick={() => deleteAuthorClick(author.id)}
											/>
										</div>
									);
								})
							)}
						</div>
					</div>
				</div>
			</form>
		</section>
	);
}

export default CreateCourse;
