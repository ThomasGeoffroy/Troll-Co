const url = 'https://mangaverse-api.p.rapidapi.com/manga/fetch';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1ce0271afamsh5863f82ae985a97p1715e6jsnc3aaa3e97db9',
		'X-RapidAPI-Host': 'mangaverse-api.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
console.log(response);
