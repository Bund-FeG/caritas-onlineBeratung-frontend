import { redirectToApp } from '../registration/autoLogin';

export const initPasswordResetOverlay = () => {
	const passwordResetOverlay = document.querySelector(
		'.overlay__passwordReset'
	);

	if (passwordResetOverlay) {
		addOverlayClasses(passwordResetOverlay);
	}

	const overlayButton = document.getElementById(
		'sendPasswordResetOverlayButton'
	);
	overlayButton?.addEventListener('click', redirectToApp);
};

const addOverlayClasses = (overlay: Element) => {
	const overlaySibling = overlay.previousElementSibling;
	overlay.classList.add('overlay--flex');
	overlaySibling?.classList.add('registration__blur');
	document
		.getElementById('loginLogoWrapper')
		?.classList.add('registration__blur');
};
