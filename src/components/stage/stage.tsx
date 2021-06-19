import * as React from 'react';
import { translate } from '../../resources/scripts/i18n/translate';
import { ReactComponent as BujuLogo } from '../../resources/img/logos/logo-feg-jugend.svg';
import './stage.styles';

export interface StageProps {
	hasAnimation?: boolean;
}

export const Stage = (props: StageProps) => {
	return (
		<div
			id="loginLogoWrapper"
			className={props.hasAnimation ? `stage stage--animated` : `stage`}
		>
			<div className="stage__headline">
				<h1>{translate('app.title')}</h1>
				<h4>{translate('app.claim')}</h4>
			</div>

			{props.hasAnimation ? (
				<div className="stage__spinner">
					<div className="double-bounce1"></div>
					<div className="double-bounce2"></div>
				</div>
			) : null}

			<div className="stage__logos">
				<BujuLogo />
			</div>
		</div>
	);
};
