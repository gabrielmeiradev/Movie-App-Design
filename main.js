const categoriesElement = document.querySelector(".categories");
const moviesElement = document.querySelector(".movies-gallery");
const displayTemp = document.querySelector(".display");

const bannerMovieFullElement = document.querySelector(".banner-movie");
const titleMovieElement = document.querySelector(".movie-title-full");
const descTitleMovieElement = document.querySelector(".movie-desc-title");
const descYearElement = document.querySelector(".movie-desc-year");
const storylineElement = document.querySelector(".movie-desc-storyline");
const descImg = document.querySelector(".desc-img");


let categories = ["Sci-fi", "Action", "Warfare", "African", "Adventure"];
let moviesList = [
    {
        id: 1,
        year: "2009",
        name: "Coraline",
        banner: "https://ovicio.com.br/wp-content/uploads/2021/03/20210331-coraline.jpg",
        url: "https://m.media-amazon.com/images/I/81J52QFflgL._AC_SL1500_.jpg",
        storyline: "An adventurous girl walks through a secret door in her new home and discovers a strangely idealized version of her frustrating home, but it has sinister secrets."
    }, 
    {
        id: 2,
        year: "2019",
        name: "After",
        banner: "https://m.media-amazon.com/images/M/MV5BZGIzYzk3OGItYTQzMS00MmMwLWE5NjgtM2FkZmVmMzkwYWFjXkEyXkFqcGdeQXVyOTY2Mjg4NTU@._V1_.jpg",
        url: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1636996180",
        storyline: "Tessa Young is a dedicated student, dutiful daughter and loyal girlfriend to her high school sweetheart. Entering her first semester of college, Tessa's guarded world opens up when she meets Hardin Scott, a mysterious and brooding rebel who makes her question all she thought she knew about herself -- and what she wants out of life."
    },
    {
        id: 3,
        year: "1985",
        name: "Back to the future",
        banner: "https://media.ticmate.com//resources/ticmate_live/upload_go/015a7b35d02d7a54-Bck-to-the-Future-the-Musicl---Mobile.jpg",
        url: "https://m.media-amazon.com/images/I/71BPuv+iRbL._AC_SL1000_.jpg",
        storyline: "Marty travels back in time using an eccentric scientist's time machine. However, he must make his high-school-aged parents fall in love in order to return to the present."
    }, 
    {
        id: 4,
        year: "2021",
        name: "Black Widow",
        url: "https://upload.wikimedia.org/wikipedia/pt/2/2b/Black_Widow_soundtrack_cover.jpg",
        banner: "https://www.magazine-hd.com/apps/wp/wp-content/uploads/2021/04/blackwidow-poster-partial.jpg",
        storyline: "Natasha Romanoff, a former KGB spy, is shocked to find out that her ex handler, General Dreykov, is still alive. While evading capture by Taskmaster, she is forced to confront her dark past."
    }
]


function checkMovieClicked(m){
    bannerMovieFullElement.style.backgroundImage = "url('" + m.banner + "')";
    titleMovieElement.innerHTML = m.name;
    descYearElement.innerHTML = m.year;
    storylineElement.innerHTML = m.storyline;
    descTitleMovieElement.innerHTML = m.name;
    descImg.src = m.url;
}

function addCategory(e){
    const category = document.createElement("div");
    category.className = "category";
    category.innerHTML = "<span>" + e + "</span>";
    categoriesElement.appendChild(category);
}
  
function addMovie(e){
    const movie = document.createElement("div");
    movie.className = "movie";
    movie.addEventListener('click', function(){checkMovieClicked(e);}, false)
    movie.innerHTML = "<img src='" + e.url + "'/><p>" + e.name + "</p>";
    moviesElement.appendChild(movie);
}

categories.forEach(element => addCategory(element));
moviesList.forEach(element => addMovie(element));