export default class GeolocationController {
	constructor($log, geolocationService) {
		'ngInject';

		this.$log = $log;
		this.geolocationService = geolocationService;
	}

	$onInit = () => {
		this.geolocationService.locateUser().then((location) => {
			this.location = location;
			this.$log.info(this.location);
		});
	};
}
