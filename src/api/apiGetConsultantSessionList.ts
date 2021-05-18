import { config } from '../resources/scripts/config';
import {
	SESSION_LIST_TAB,
	typeIsSession,
	typeIsTeamSession
} from '../components/session/sessionHelpers';
import { ListItemsResponseInterface } from '../globalState';
import { fetchData, FETCH_METHODS, FETCH_ERRORS } from './fetchData';

export const INITIAL_FILTER: string = 'all';
export const INITIAL_OFFSET: number = 0;
export const SESSION_COUNT: number = 15;

export const apiGetConsultantSessionList = async (
	type: string,
	filter: string = INITIAL_FILTER,
	offset: number = INITIAL_OFFSET,
	sessionListTab?: string
): Promise<ListItemsResponseInterface> => {
	const isTeamSession: boolean = typeIsTeamSession(type);
	let url: string;
	if (isTeamSession) {
		url = config.endpoints.consultantTeamSessions;
	} else if (!isTeamSession && typeIsSession(type)) {
		url = config.endpoints.consultantSessions;
	} else {
		url = `${config.endpoints.consultantEnquiriesBase}${
			sessionListTab && sessionListTab === SESSION_LIST_TAB.ANONYMOUS
				? `${SESSION_LIST_TAB.ANONYMOUS}`
				: `${SESSION_LIST_TAB.REGISTERED}`
		}?`;
	}
	url = url + `count=${SESSION_COUNT}&filter=${filter}&offset=${offset}`;

	const timeout = 10000;

	return fetchData({
		url: url,
		method: FETCH_METHODS.GET,
		rcValidation: true,
		responseHandling: [FETCH_ERRORS.EMPTY],
		timeout: timeout
	});
};