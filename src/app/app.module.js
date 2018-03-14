import styles from './styles/styles.scss';

import './services/core.module';
import geolocationService from './services/geolocation/geolocation.service';
import './app.pages';

const appModule = angular
	.module('geolocation-app', [
		'app.core',
		'ui.router',
		'app.pages.geolocation'
	]);

appModule.service('geolocationService', geolocationService);

export default appModule;
