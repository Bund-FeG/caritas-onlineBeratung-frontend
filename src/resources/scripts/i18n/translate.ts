import app from './de/app';
import absence from './de/absence';
import absenceInformal from './de/absenceInformal';
import attachments from './de/attachments';
import attachmentsInformal from './de/attachmentsInformal';
import chatFlyout from './de/chatFlyout';
import consultant from './de/consultant';
import deleteAccount from './de/deleteAccount';
import deleteAccountInformal from './de/deleteAccountInformal';
import enquiry from './de/enquiry';
import enquiryInformal from './de/enquiryInformal';
import furtherSteps from './de/furtherSteps';
import furtherStepsInformal from './de/furtherStepsInformal';
import groupChat from './de/groupChat';
import groupChatInformal from './de/groupChatInformal';
import login from './de/login';
import message from './de/message';
import monitoring from './de/monitoring';
import navigation from './de/navigation';
import profile from './de/profile';
import profileInformal from './de/profileInformal';
import registration from './de/registration';
import registrationInformal from './de/registrationInformal';
import resort from './de/resort';
import session from './de/session';
import sessionInformal from './de/sessionInformal';
import sessionList from './de/sessionList';
import sessionListInformal from './de/sessionListInformal';
import statusOverlay from './de/statusOverlay';
import statusOverlayInformal from './de/statusOverlayInformal';
import typingIndicator from './de/typingIndicator';
import user from './de/user';
import userProfile from './de/userProfile';
import videoCall from './de/videoCall';
import videoCallInformal from './de/videoCallInformal';
import { getResortKeyForConsultingType } from '../helpers/resorts';
import { getTokenFromCookie } from '../../../components/sessionCookie/accessSessionCookie';

const defaultLocale: any = {
	app,
	absence,
	attachments,
	chatFlyout,
	consultant,
	deleteAccount,
	enquiry,
	furtherSteps,
	groupChat,
	login,
	message,
	monitoring,
	navigation,
	profile,
	registration,
	resort,
	session,
	sessionList,
	statusOverlay,
	typingIndicator,
	user,
	userProfile,
	videoCall
};

const informalLocale: any = {
	...defaultLocale,
	absence: { ...absence, ...absenceInformal },
	attachments: { ...attachments, ...attachmentsInformal },
	deleteAccount: { ...deleteAccount, ...deleteAccountInformal },
	groupChat: { ...groupChat, ...groupChatInformal },
	enquiry: { ...enquiry, ...enquiryInformal },
	furtherSteps: { ...furtherSteps, ...furtherStepsInformal },
	profile: { ...profile, ...profileInformal },
	registration: { ...registration, ...registrationInformal },
	session: { ...session, ...sessionInformal },
	sessionList: { ...sessionList, ...sessionListInformal },
	statusOverlay: { ...statusOverlay, ...statusOverlayInformal },
	videoCall: { ...videoCall, ...videoCallInformal }
};

export const getTranslation = (
	translatable: string,
	informal: boolean = false
): any => {
	let config = translatable.split('.')[0];
	return (informal ? informalLocale : defaultLocale)[config][
		translatable.split('.').slice(1).join('.')
	];
};

export const translate = (translatable: string): any => {
	let informal = Boolean(getTokenFromCookie('useInformal'));
	return (
		getTranslation(translatable, informal) ||
		'[NO TRANSLATION FOR ' + translatable + ']'
	);
};

export const handleNumericTranslation = (
	topic: string,
	value: string,
	number: number
) => {
	const translateVal = (topic + '.' + value + '.' + number).toString();
	const translateStr = translateVal.toString();
	return translate(translateStr);
};

export const getAddictiveDrugsString = (addictiveDrugs: string[]) => {
	let drugString = '';
	addictiveDrugs.forEach((drug, i) => {
		if (i > 0) {
			drugString += ', ';
		}
		drugString += handleNumericTranslation(
			'user.userAddiction',
			'addictiveDrugs',
			parseInt(drug)
		);
	});
	return drugString;
};

export const getResortTranslation = (
	consultingType: number,
	alt: boolean = false,
	registerDropdown: boolean = false
) => {
	const translatable = `resort.${getResortKeyForConsultingType(
		consultingType
	)}${alt ? '.alt' : ''}${registerDropdown ? '.registerDropdown' : ''}`;
	return translate(translatable);
};
