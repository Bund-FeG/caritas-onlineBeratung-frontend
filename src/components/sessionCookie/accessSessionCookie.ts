export const setTokenInCookie = (name: string, token: string) => {
	document.cookie = name + '=' + token + ';path=/;';
};

export const getTokenFromCookie = (targetToken: string) => {
	const targetName = targetToken + '=';
	const decodedCookie = decodeURIComponent(document.cookie);

	const ca = decodedCookie.split(';');

	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) === ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(targetName) === 0) {
			return c.substring(targetName.length, c.length);
		}
	}
	return '';
};

export const removeAllCookies = () => {
	document.cookie.split(';').forEach(function (c) {
		document.cookie =
			c.trim().split('=')[0] +
			'=;' +
			'expires=Thu, 27 May 1992 08:32:00 MET;';
	});
};
