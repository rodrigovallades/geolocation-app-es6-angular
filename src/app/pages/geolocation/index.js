import geolocationComponent from './geolocation.component';

const geolocationModule = angular.module('app.pages.geolocation', []);

geolocationModule.component('geolocation', geolocationComponent);

export default geolocationModule;
