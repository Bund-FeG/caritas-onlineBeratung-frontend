import { config } from '../../../resources/ts/config';
import { fetchData, FETCH_METHODS } from './fetchData';

export const ajaxCallSetAbsence = async (
	absentBoolVal: boolean,
	message: string
) => {
	const url = config.endpoints.setAbsence;
	const absenceData = JSON.stringify({
		absent: absentBoolVal,
		message: absentBoolVal ? message : null
	});

	return fetchData({
		url: url,
		method: FETCH_METHODS.PUT,
		bodyData: absenceData
	});
};
