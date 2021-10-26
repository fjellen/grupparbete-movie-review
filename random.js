let noPages = null;
const APIKey = 'ABGhAz7mHz2uYymBiuGQUhBYc4taw5KF';
const main = document.querySelector('main');

// Get random movie review from API and create HTML elements
window.addEventListener('DOMContentLoaded', async function(event) {
	const maxOffset = 3860;
	const numberOfPages = maxOffset / 20;
	
	let randomPage = Math.floor(Math.random() * numberOfPages) + 1;
	console.log(randomPage);
	let randomOffset = randomPage * 20;
	
	let url = `https://api.nytimes.com/svc/movies/v2/reviews/picks.json?offset=${randomOffset}&order=by-publication-date&api-key=${APIKey}`;
	let response = await fetch(url);
	let data = await response.json();
	console.log(data.results);
	
	const filmIndexLength = data.results.length;
	let randomFilmIndex = Math.floor(Math.random() * filmIndexLength);
	
	let film = data.results[randomFilmIndex];
	
	let article = document.createElement('article');
	let title = document.createElement('h2');
	let summary = document.createElement('p');
	summary.innerHTML = film.summary_short;
	title.innerText = film.display_title;
	article.append(title);
	article.append(summary);
	main.append(article);
});

// 3860 is current last offset-page

// https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=ABGhAz7mHz2uYymBiuGQUhBYc4taw5KF