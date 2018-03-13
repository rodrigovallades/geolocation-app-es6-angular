import routerHelperService from './router-helper/router-helper.service';
import geolocationService from './geolocation/geolocation.service';

const coreModule = angular.module('app.core', [
	'ui.router'
]);

// inject services, config, filters and re-usable code
// which can be shared via all modules
coreModule.config(routerHelperService);

coreModule.service('geolocationService', geolocationService);

export default coreModule;
