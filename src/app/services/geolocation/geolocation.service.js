export default class GeolocationService {
	constructor(
		$http
	) {
		'ngInject';

		this.$http = $http;
		this.api_url = 'http://freegeoip.net/json/'
	}

	locateUser = () => {
		return this.$http.get(this.api_url)
			.then((response) => {
				return response.data;
			});
	};

	locateUrl = url => {
		return this.$http.get(this.api_url + url)
			.then((response) => {
				return response.data;
			});
	};
}
