function getDatePoint(date) {
	return date
		.split('/')
		.map((num) => (num.length === 1 ? `0${num}` : num))
		.join('.');
}

export default getDatePoint;
