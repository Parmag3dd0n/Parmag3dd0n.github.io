const ctftimeApiUrl = 'https://ctftime.org/api/v1/teams/301277/';
const apiUrl = 'https://corsproxy.io/?' + encodeURIComponent(ctftimeApiUrl);

fetch(apiUrl).then(response => {
	return response.json();
}).then(data => {
	const currentYear = new Date().getFullYear();
	const rating = data.rating[currentYear];

	const ratingPoints = rating && rating.rating_points !== undefined
		? rating.rating_points.toFixed(3): "temporarily unavailable";
	const countryPlace = rating && rating.country_place !== undefined
		? rating.country_place: "temporarily unavailable";
	const ratingPlace = rating && rating.rating_place !== undefined
		? rating.rating_place: "temporarily unavailable";

	const text = "🏆 Rating points: " + ratingPoints + "<br>🇮🇹 Country place: " +
		countryPlace + "<br>🌍 World place: " + ratingPlace;
	document.getElementById("ratings").innerHTML = text;
}).catch(err => {
    const text = "🏆 Rating points: temporarily unavailable<br>🇮🇹 Country place: " +
		"temporarily unavailable<br>🌍 World place: temporarily unavailable";
    document.getElementById("ratings").innerHTML = text;
});
