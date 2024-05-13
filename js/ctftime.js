const ctftimeApiUrl = 'https://ctftime.org/api/v1/teams/301277/';
const apiUrl = 'https://corsproxy.io/?' + encodeURIComponent(ctftimeApiUrl);

fetch(apiUrl).then(response => {
	return response.json();
}).then(data => {
	const currentYear = new Date().getFullYear();
	const rating = data.rating[currentYear];

	const ratingPoints = rating.rating_points.toFixed(3);
	const countryPlace = rating.country_place;
	const ratingPlace = rating.rating_place;
	
	const text = "🏆 Rating points: " + ratingPoints + "<br>🇮🇹 Country place: " +
		countryPlace + "<br>🌍 World place: " + ratingPlace;
	document.getElementById('ratings').innerHTML = text;
}).catch(err => {
	document.getElementById('ratings').style.display = 'none';
});