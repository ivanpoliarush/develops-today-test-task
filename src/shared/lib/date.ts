export const getYearList = (startYear: number, endYear: number) => {
	const yearsList = Array.from({
		length: endYear - startYear + 1,
	}).map((_, index) => endYear - index);

	return yearsList;
};
