import { config } from '../../../resources/ts/config';
import {
	fetchData,
	FETCH_METHODS,
	FETCH_SUCCESS,
	FETCH_ERRORS
} from './fetchData';

export interface groupChatInfoData {
	active: boolean;
	groupId: string;
	id: number;
}

export const ajaxCallGetGroupChatInfo = async (
	groupChatId: number
): Promise<groupChatInfoData> => {
	const url = config.endpoints.groupChatBase + groupChatId;

	return fetchData({
		url: url,
		method: FETCH_METHODS.GET,
		responseHandling: [FETCH_SUCCESS.CONTENT, FETCH_ERRORS.NO_MATCH]
	});
};
