import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useContext, useState } from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { logout } from '../logout/logout';
import { AppRouter } from './AppRouter';
import { config } from '../../resources/scripts/config';
import {
	setTokenInCookie,
	getTokenFromCookie
} from '../sessionCookie/accessSessionCookie';
import {
	UserDataContext,
	UserDataInterface,
	AuthDataContext,
	AuthDataInterface,
	hasUserAuthority,
	AUTHORITIES
} from '../../globalState';
import { ContextProvider } from '../../globalState/state';
import { getUserData } from '../apiWrapper';
import { Loading } from './Loading';
import '../../resources/styles/styles';
import './app.styles';
import './navigation.styles';
import './loading.styles';

export const history = createBrowserHistory();

export const initApp = () => {
	ReactDOM.render(<AppContainer />, document.getElementById('appRoot'));
};

export const AppContainer = (props) => {
	return (
		<ContextProvider>
			<App />
		</ContextProvider>
	);
};

export const App = (props) => {
	const { setAuthData } = useContext(AuthDataContext);
	const [authDataRequested, setAuthDataRequested] = useState(false);
	const { userData, setUserData } = useContext(UserDataContext);
	const [appReady, setAppReady] = useState(false);
	const [userDataRequested, setUserDataRequested] = useState(false);

	const handleLogout = () => {
		logout();
	};

	const renderCondition = () => {
		if (
			hasUserAuthority(AUTHORITIES.VIEW_ALL_PEER_SESSIONS, userData) ||
			hasUserAuthority(AUTHORITIES.CONSULTANT_DEFAULT, userData) ||
			hasUserAuthority(AUTHORITIES.USER_DEFAULT, userData)
		) {
			return <AppRouter handleLogout={handleLogout} />;
		}
		window.location.href = config.endpoints.logoutRedirect;
		return null;
	};

	if (appReady) {
		return <Router history={history}>{renderCondition()}</Router>;
	}

	if (!authDataRequested) {
		setAuthDataRequested(true);
		const currentAuthData: AuthDataInterface = {
			keycloakRefreshToken: getTokenFromCookie('refreshToken'),
			keycloakToken: getTokenFromCookie('keycloak'),
			rocketchatToken: getTokenFromCookie('rc_token'),
			rocketchatUserId: getTokenFromCookie('rc_uid')
		};
		setAuthData(currentAuthData);
	}

	if (!userDataRequested) {
		setUserDataRequested(true);
		getUserData()
			.then((userProfileData: UserDataInterface) => {
				// set informal / formal cookie depending on the given userdata
				setTokenInCookie(
					'useInformal',
					!userProfileData.formalLanguage ? '1' : ''
				);
				setUserData(userProfileData);
				setAppReady(true);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	return <Loading />;
};