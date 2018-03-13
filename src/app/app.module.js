import styles from './styles/styles.scss';

import './services/core.module';
import './app.components';

const appModule = angular
	.module('geolocation-app', [
		'app.core',
		'ui.router',
		'app.pages.geolocation'
	]);

export default appModule;
