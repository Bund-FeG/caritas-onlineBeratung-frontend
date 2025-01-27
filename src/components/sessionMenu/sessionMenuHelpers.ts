import { OverlayItem, OVERLAY_FUNCTIONS } from '../overlay/Overlay';
import { translate } from '../../resources/scripts/i18n/translate';
import { BUTTON_TYPES } from '../button/Button';
import { ReactComponent as CheckIcon } from '../../resources/img/illustrations/check.svg';
import { ReactComponent as XIcon } from '../../resources/img/illustrations/x.svg';

export const stopGroupChatSecurityOverlayItem: OverlayItem = {
	svg: XIcon,
	headline: translate('groupChat.stopChat.securityOverlay.headline'),
	copy: '',
	buttonSet: [
		{
			label: translate('groupChat.stopChat.securityOverlay.button1Label'),
			function: OVERLAY_FUNCTIONS.STOP_GROUP_CHAT,
			type: BUTTON_TYPES.PRIMARY
		},
		{
			label: translate('groupChat.stopChat.securityOverlay.button2Label'),
			function: OVERLAY_FUNCTIONS.CLOSE,
			type: BUTTON_TYPES.SECONDARY
		}
	]
};

export const stopGroupChatSuccessOverlayItem: OverlayItem = {
	svg: CheckIcon,
	headline: translate('groupChat.stopChat.successOverlay.headline'),
	buttonSet: [
		{
			label: translate('groupChat.stopChat.successOverlay.button1Label'),
			function: OVERLAY_FUNCTIONS.REDIRECT,
			type: BUTTON_TYPES.PRIMARY
		},
		{
			label: translate('groupChat.stopChat.successOverlay.button2Label'),
			function: OVERLAY_FUNCTIONS.LOGOUT,
			type: BUTTON_TYPES.SECONDARY
		}
	]
};

export const groupChatErrorOverlayItem: OverlayItem = {
	svg: XIcon,
	headline: translate('groupChat.createError.overlay.headline'),
	buttonSet: [
		{
			label: translate('groupChat.createError.overlay.buttonLabel'),
			function: OVERLAY_FUNCTIONS.CLOSE,
			type: BUTTON_TYPES.PRIMARY
		}
	]
};

export const leaveGroupChatSecurityOverlayItem: OverlayItem = {
	svg: XIcon,
	headline: translate('groupChat.leaveChat.securityOverlay.headline'),
	buttonSet: [
		{
			label: translate(
				'groupChat.leaveChat.securityOverlay.button1Label'
			),
			function: OVERLAY_FUNCTIONS.LEAVE_GROUP_CHAT,
			type: BUTTON_TYPES.PRIMARY
		},
		{
			label: translate(
				'groupChat.leaveChat.securityOverlay.button2Label'
			),
			function: OVERLAY_FUNCTIONS.CLOSE,
			type: BUTTON_TYPES.SECONDARY
		}
	]
};

export const leaveGroupChatSuccessOverlayItem: OverlayItem = {
	svg: CheckIcon,
	headline: translate('groupChat.leaveChat.successOverlay.headline'),
	buttonSet: [
		{
			label: translate('groupChat.leaveChat.successOverlay.button1Label'),
			function: OVERLAY_FUNCTIONS.REDIRECT,
			type: BUTTON_TYPES.PRIMARY
		},
		{
			label: translate('groupChat.leaveChat.successOverlay.button2Label'),
			function: OVERLAY_FUNCTIONS.LOGOUT,
			type: BUTTON_TYPES.SECONDARY
		}
	]
};
