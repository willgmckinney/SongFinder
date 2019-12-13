const baseURL = 'https://www.songsterr.com/a/ra/songs.json';

let url;

const searchTerm = document.querySelector('.search');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');

//RESULTS NAVIGATION
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');

//RESULTS SECTION
const section = document.querySelector('section');

searchForm.addEventListener('submit', fetchResults);


function fetchResults(e) {
        e.preventDefault();

        url = baseURL + '?pattern=' + searchTerm.value;
        console.log('URL: ', url)

        fetch(url).then(function(result){
            return result.json();
        }).then(function(json) {
            displayResults(json);
        })
      }

function displayResults(json) {
    let songs = json

    while (section.firstChild) {
        section.removeChild(section.firstChild);
    }


    if(songs.length === 0) {
        console.log("No results");
      } else {
        for(let i = 0; i < 5; i++) {
            let article = document.createElement('article');
            let title = document.createElement('h2');
            let link = document.createElement('p');
            let artist = document.createElement('h5')

            let current = songs[i];
            console.log("Current:", current);

            link.textContent = current.title;
            artist.textContent = current.artist.nameWithoutThePrefix;


            article.appendChild(title);
            title.appendChild(link);
            article.appendChild(artist)
            section.appendChild(article);
        }
      }
    };