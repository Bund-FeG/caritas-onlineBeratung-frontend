import { config } from '../../src/resources/scripts/config';

const checkForGenericRegistrationElements = () => {
	cy.get('#loginLogoWrapper').should('exist');
	cy.get('[data-consultingtype]').should('exist');
	cy.get('.registration__overline').should('exist');
	cy.get('.registration__headline').should('exist');
	cy.get('#username').should('exist');
	cy.get('#passwordInput').should('exist');
	cy.get('#passwordConfirmation').should('exist');
	cy.get('#dataProtectionCheckbox').should('exist');
	cy.get('.button__primary').should('exist');
	cy.get('.registration__toLogin').should('exist');
};

describe('registration', () => {
	describe('addiction', () => {
		it('should have all generic registration page elements', () => {
			cy.visit('/registration.suchtberatung.html');
			cy.get('[data-cy=close-welcome-screen]').click();
			checkForGenericRegistrationElements();
		});

		it('should have no password info text', () => {
			cy.visit('/registration.suchtberatung.html');
			cy.get('[data-cy=close-welcome-screen]').click();
			cy.get('[data-cy=registration-password-note]').should('not.exist');
		});

		it('should have no agency selection info text', () => {
			cy.visit('/registration.suchtberatung.html');
			cy.get('[data-cy=close-welcome-screen]').click();
			cy.get('[data-cy=registration-agency-selection-note]').should(
				'not.exist'
			);
		});
	});

	describe('u25', () => {
		it('should redirect to helpmail when no aid is given', () => {
			cy.visit('/registration.u25.html');
			cy.url().then((url) => {
				expect(url).to.contain(config.urls.toU25Helpmail);
			});
		});

		it('should have all generic registration page elements', () => {
			cy.fixture('service.agencies.json').then((agencies) => {
				cy.intercept(config.endpoints.agencyServiceBase, agencies);
				cy.visit('/registration.u25.html?aid=1');
				cy.get('[data-cy=close-welcome-screen]').click();
				checkForGenericRegistrationElements();
			});
		});

		it('should have a password info text', () => {
			cy.fixture('service.agencies.json').then((agencies) => {
				cy.intercept(config.endpoints.agencyServiceBase, agencies);
				cy.visit('/registration.u25.html?aid=1');
				cy.get('[data-cy=close-welcome-screen]').click();
				cy.get('[data-cy=registration-password-note]').should('exist');
			});
		});

		it('should have no agency selection info text', () => {
			cy.fixture('service.agencies.json').then((agencies) => {
				cy.intercept(config.endpoints.agencyServiceBase, agencies);
				cy.visit('/registration.u25.html?aid=1');
				cy.get('[data-cy=close-welcome-screen]').click();
				cy.get('[data-cy=registration-agency-selection-note]').should(
					'not.exist'
				);
			});
		});

		it('should have an agency info when aid is given', () => {
			cy.fixture('service.agencies.json').then((agencies) => {
				cy.intercept(config.endpoints.agencyServiceBase, agencies);
				cy.visit('/registration.u25.html?aid=1');
				cy.get('[data-cy=close-welcome-screen]').click();
				cy.get('[data-cy=show-preselected-agency]').should('exist');
				cy.get('[data-cy=show-preselected-agency]').contains(
					agencies[0].name
				);
			});
		});
	});

	describe('pregnancy', () => {
		it('should have all generic registration page elements', () => {
			cy.visit('/registration.schwangerschaftsberatung.html');
			cy.get('[data-cy=close-welcome-screen]').click();
			checkForGenericRegistrationElements();
		});

		it('should have no password info text', () => {
			cy.visit('/registration.schwangerschaftsberatung.html');
			cy.get('[data-cy=close-welcome-screen]').click();
			cy.get('[data-cy=registration-password-note]').should('not.exist');
		});

		it('should have no agency selection info text', () => {
			cy.visit('/registration.schwangerschaftsberatung.html');
			cy.get('[data-cy=close-welcome-screen]').click();
			cy.get('[data-cy=registration-agency-selection-note]').should(
				'not.exist'
			);
		});
	});

	describe('parenting', () => {
		it('should have all generic registration page elements', () => {
			cy.visit('/registration.eltern-familie.html');
			cy.get('[data-cy=close-welcome-screen]').click();
			checkForGenericRegistrationElements();
		});

		it('should have no password info text', () => {
			cy.visit('/registration.eltern-familie.html');
			cy.get('[data-cy=close-welcome-screen]').click();
			cy.get('[data-cy=registration-password-note]').should('not.exist');
		});

		it('should have no agency selection info text', () => {
			cy.visit('/registration.eltern-familie.html');
			cy.get('[data-cy=close-welcome-screen]').click();
			cy.get('[data-cy=registration-agency-selection-note]').should(
				'not.exist'
			);
		});
	});

	describe('cure', () => {
		it('should have all generic registration page elements', () => {
			cy.visit('/registration.kurberatung.html');
			cy.get('[data-cy=close-welcome-screen]').click();
			checkForGenericRegistrationElements();
		});

		it('should have no password info text', () => {
			cy.visit('/registration.kurberatung.html');
			cy.get('[data-cy=close-welcome-screen]').click();
			cy.get('[data-cy=registration-password-note]').should('not.exist');
		});

		it('should have no agency selection info text', () => {
			cy.visit('/registration.kurberatung.html');
			cy.get('[data-cy=close-welcome-screen]').click();
			cy.get('[data-cy=registration-agency-selection-note]').should(
				'not.exist'
			);
		});
	});

	describe('debt', () => {
		it('should have all generic registration page elements', () => {
			cy.visit('/registration.schuldnerberatung.html');
			cy.get('[data-cy=close-welcome-screen]').click();
			checkForGenericRegistrationElements();
		});

		it('should have no password info text', () => {
			cy.visit('/registration.schuldnerberatung.html');
			cy.get('[data-cy=close-welcome-screen]').click();
			cy.get('[data-cy=registration-password-note]').should('not.exist');
		});

		it('should have no agency selection info text', () => {
			cy.visit('/registration.schuldnerberatung.html');
			cy.get('[data-cy=close-welcome-screen]').click();
			cy.get('[data-cy=registration-agency-selection-note]').should(
				'not.exist'
			);
		});
	});

	describe('social', () => {
		it('should have all generic registration page elements', () => {
			cy.visit('/registration.allgemeine-soziale-beratung.html');
			cy.get('[data-cy=close-welcome-screen]').click();
			checkForGenericRegistrationElements();
		});

		it('should have no password info text', () => {
			cy.visit('/registration.allgemeine-soziale-beratung.html');
			cy.get('[data-cy=close-welcome-screen]').click();
			cy.get('[data-cy=registration-password-note]').should('not.exist');
		});

		it('should have no agency selection info text', () => {
			cy.visit('/registration.allgemeine-soziale-beratung.html');
			cy.get('[data-cy=close-welcome-screen]').click();
			cy.get('[data-cy=registration-agency-selection-note]').should(
				'not.exist'
			);
		});
	});

	describe('seniority', () => {
		it('should have all generic registration page elements', () => {
			cy.visit('/registration.leben-im-alter.html');
			cy.get('[data-cy=close-welcome-screen]').click();
			checkForGenericRegistrationElements();
		});

		it('should have no password info text', () => {
			cy.visit('/registration.leben-im-alter.html');
			cy.get('[data-cy=close-welcome-screen]').click();
			cy.get('[data-cy=registration-password-note]').should('not.exist');
		});

		it('should have no agency selection info text', () => {
			cy.visit('/registration.leben-im-alter.html');
			cy.get('[data-cy=close-welcome-screen]').click();
			cy.get('[data-cy=registration-agency-selection-note]').should(
				'not.exist'
			);
		});
	});

	describe('disability', () => {
		it('should have all generic registration page elements', () => {
			cy.visit(
				'/registration.behinderung-und-psychische-erkrankung.html'
			);
			cy.get('[data-cy=close-welcome-screen]').click();
			checkForGenericRegistrationElements();
		});

		it('should have no password info text', () => {
			cy.visit(
				'/registration.behinderung-und-psychische-erkrankung.html'
			);
			cy.get('[data-cy=close-welcome-screen]').click();
			cy.get('[data-cy=registration-password-note]').should('not.exist');
		});

		it('should have no agency selection info text', () => {
			cy.visit(
				'/registration.behinderung-und-psychische-erkrankung.html'
			);
			cy.get('[data-cy=close-welcome-screen]').click();
			cy.get('[data-cy=registration-agency-selection-note]').should(
				'not.exist'
			);
		});
	});

	describe('planB', () => {
		it('should have all generic registration page elements', () => {
			cy.visit('/registration.mein-planb.html');
			cy.get('[data-cy=close-welcome-screen]').click();
			checkForGenericRegistrationElements();
		});

		it('should have no password info text', () => {
			cy.visit('/registration.mein-planb.html');
			cy.get('[data-cy=close-welcome-screen]').click();
			cy.get('[data-cy=registration-password-note]').should('not.exist');
		});

		it('should have no agency selection info text', () => {
			cy.visit('/registration.mein-planb.html');
			cy.get('[data-cy=close-welcome-screen]').click();
			cy.get('[data-cy=registration-agency-selection-note]').should(
				'not.exist'
			);
		});
	});

	describe('law', () => {
		it('should have all generic registration page elements', () => {
			cy.visit('/registration.rechtliche-betreuung.html');
			cy.get('[data-cy=close-welcome-screen]').click();
			checkForGenericRegistrationElements();
		});

		it('should have no password info text', () => {
			cy.visit('/registration.rechtliche-betreuung.html');
			cy.get('[data-cy=close-welcome-screen]').click();
			cy.get('[data-cy=registration-password-note]').should('not.exist');
		});

		it('should have no agency selection info text', () => {
			cy.visit('/registration.rechtliche-betreuung.html');
			cy.get('[data-cy=close-welcome-screen]').click();
			cy.get('[data-cy=registration-agency-selection-note]').should(
				'not.exist'
			);
		});
	});

	describe('offender', () => {
		it('should have all generic registration page elements', () => {
			cy.visit('/registration.straffaelligkeit.html');
			cy.get('[data-cy=close-welcome-screen]').click();
			checkForGenericRegistrationElements();
		});

		it('should have no password info text', () => {
			cy.visit('/registration.straffaelligkeit.html');
			cy.get('[data-cy=close-welcome-screen]').click();
			cy.get('[data-cy=registration-password-note]').should('not.exist');
		});

		it('should have no agency selection info text', () => {
			cy.visit('/registration.straffaelligkeit.html');
			cy.get('[data-cy=close-welcome-screen]').click();
			cy.get('[data-cy=registration-agency-selection-note]').should(
				'not.exist'
			);
		});
	});

	describe('aids', () => {
		it('should have all generic registration page elements', () => {
			cy.visit('/registration.hiv-aids-beratung.html');
			cy.get('[data-cy=close-welcome-screen]').click();
			checkForGenericRegistrationElements();
		});

		it('should have no password info text', () => {
			cy.visit('/registration.hiv-aids-beratung.html');
			cy.get('[data-cy=close-welcome-screen]').click();
			cy.get('[data-cy=registration-password-note]').should('not.exist');
		});

		it('should have no agency selection info text', () => {
			cy.visit('/registration.hiv-aids-beratung.html');
			cy.get('[data-cy=close-welcome-screen]').click();
			cy.get('[data-cy=registration-agency-selection-note]').should(
				'not.exist'
			);
		});
	});

	describe('rehabilitation', () => {
		it('should have all generic registration page elements', () => {
			cy.visit('/registration.kinder-reha.html');
			cy.get('[data-cy=close-welcome-screen]').click();
			checkForGenericRegistrationElements();
		});

		it('should have no password info text', () => {
			cy.visit('/registration.kinder-reha.html');
			cy.get('[data-cy=close-welcome-screen]').click();
			cy.get('[data-cy=registration-password-note]').should('not.exist');
		});

		it('should have no agency selection info text', () => {
			cy.visit('/registration.kinder-reha.html');
			cy.get('[data-cy=close-welcome-screen]').click();
			cy.get('[data-cy=registration-agency-selection-note]').should(
				'not.exist'
			);
		});
	});

	describe('children', () => {
		it('should have all generic registration page elements', () => {
			cy.visit('/registration.kinder-jugendliche.html');
			cy.get('[data-cy=close-welcome-screen]').click();
			checkForGenericRegistrationElements();
		});

		it('should have no password info text', () => {
			cy.visit('/registration.kinder-jugendliche.html');
			cy.get('[data-cy=close-welcome-screen]').click();
			cy.get('[data-cy=registration-password-note]').should('not.exist');
		});

		it('should have no agency selection info text', () => {
			cy.visit('/registration.kinder-jugendliche.html');
			cy.get('[data-cy=close-welcome-screen]').click();
			cy.get('[data-cy=registration-agency-selection-note]').should(
				'not.exist'
			);
		});
	});

	describe('kreuzbund', () => {
		it('should have all generic registration page elements', () => {
			cy.visit('/registration.kb-sucht-selbsthilfe.html');
			cy.get('[data-cy=close-welcome-screen]').click();
			checkForGenericRegistrationElements();
		});

		it('should have no password info text', () => {
			cy.visit('/registration.kb-sucht-selbsthilfe.html');
			cy.get('[data-cy=close-welcome-screen]').click();
			cy.get('[data-cy=registration-password-note]').should('not.exist');
		});

		it('should have no agency selection info text', () => {
			cy.visit('/registration.kb-sucht-selbsthilfe.html');
			cy.get('[data-cy=close-welcome-screen]').click();
			cy.get('[data-cy=registration-agency-selection-note]').should(
				'not.exist'
			);
		});
	});

	describe('migration', () => {
		it('should have all generic registration page elements', () => {
			cy.visit('/registration.migration.html');
			cy.get('[data-cy=close-welcome-screen]').click();
			checkForGenericRegistrationElements();
		});

		it('should have no password info text', () => {
			cy.visit('/registration.migration.html');
			cy.get('[data-cy=close-welcome-screen]').click();
			cy.get('[data-cy=registration-password-note]').should('not.exist');
		});

		it('should have no agency selection info text', () => {
			cy.visit('/registration.migration.html');
			cy.get('[data-cy=close-welcome-screen]').click();
			cy.get('[data-cy=registration-agency-selection-note]').should(
				'not.exist'
			);
		});
	});

	describe('emigration', () => {
		it('should have all generic registration page elements', () => {
			cy.visit('/registration.rw-auswanderung.html');
			cy.get('[data-cy=close-welcome-screen]').click();
			checkForGenericRegistrationElements();
		});

		it('should have no password info text', () => {
			cy.visit('/registration.rw-auswanderung.html');
			cy.get('[data-cy=close-welcome-screen]').click();
			cy.get('[data-cy=registration-password-note]').should('not.exist');
		});

		it('should have a agency selection info text', () => {
			cy.visit('/registration.rw-auswanderung.html');
			cy.get('[data-cy=close-welcome-screen]').click();
			cy.get('[data-cy=registration-agency-selection-note]').should(
				'exist'
			);
		});
	});

	describe('hospice', () => {
		it('should have all generic registration page elements', () => {
			cy.visit('/registration.hospiz-palliativ.html');
			cy.get('[data-cy=close-welcome-screen]').click();
			checkForGenericRegistrationElements();
		});

		it('should have no password info text', () => {
			cy.visit('/registration.hospiz-palliativ.html');
			cy.get('[data-cy=close-welcome-screen]').click();
			cy.get('[data-cy=registration-password-note]').should('not.exist');
		});

		it('should have no agency selection info text', () => {
			cy.visit('/registration.hospiz-palliativ.html');
			cy.get('[data-cy=close-welcome-screen]').click();
			cy.get('[data-cy=registration-agency-selection-note]').should(
				'not.exist'
			);
		});
	});

	describe('regional', () => {
		it('should have all generic registration page elements', () => {
			cy.visit('/registration.regionale-angebote.html');
			cy.get('[data-cy=close-welcome-screen]').click();
			checkForGenericRegistrationElements();
		});

		it('should have no password info text', () => {
			cy.visit('/registration.regionale-angebote.html');
			cy.get('[data-cy=close-welcome-screen]').click();
			cy.get('[data-cy=registration-password-note]').should('not.exist');
		});

		it('should have no agency selection info text', () => {
			cy.visit('/registration.regionale-angebote.html');
			cy.get('[data-cy=close-welcome-screen]').click();
			cy.get('[data-cy=registration-agency-selection-note]').should(
				'not.exist'
			);
		});
	});

	describe('men', () => {
		it('should have all generic registration page elements', () => {
			cy.visit('/registration.jungen-und-maenner.html');
			cy.get('[data-cy=close-welcome-screen]').click();
			checkForGenericRegistrationElements();
		});

		it('should have no password info text', () => {
			cy.visit('/registration.jungen-und-maenner.html');
			cy.get('[data-cy=close-welcome-screen]').click();
			cy.get('[data-cy=registration-password-note]').should('not.exist');
		});

		it('should have no agency selection info text', () => {
			cy.visit('/registration.jungen-und-maenner.html');
			cy.get('[data-cy=close-welcome-screen]').click();
			cy.get('[data-cy=registration-agency-selection-note]').should(
				'not.exist'
			);
		});
	});

	describe('supportGroupVechta', () => {
		it('should have all generic registration page elements', () => {
			cy.visit('/registration.selbsthilfe-vechta.html');
			cy.get('[data-cy=close-welcome-screen]').click();
			checkForGenericRegistrationElements();
		});

		it('should have no password reset info text', () => {
			cy.visit('/registration.selbsthilfe-vechta.html');
			cy.get('[data-cy=close-welcome-screen]').click();
			cy.get('[data-cy=no-password-reset-possible-note]').should(
				'not.exist'
			);
		});
	});
});
