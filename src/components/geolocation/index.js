import geolocationComponent from './geolocation.component';

const geolocationModule = angular.module('app.geolocation', []);

geolocationModule.component('geolocation', geolocationComponent);

export default geolocationModule;
