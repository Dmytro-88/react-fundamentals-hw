import { MIN_IN_HOUR } from '../constants';

function getCourseDuration(duration) {
	const hours = String(Math.floor(duration / MIN_IN_HOUR));
	const minutes = String(duration % MIN_IN_HOUR);
	return `${hours.length === 1 ? '0' + hours : hours}:${
		minutes.length === 2 ? minutes : '0' + minutes
	}`;
}

export default getCourseDuration;
