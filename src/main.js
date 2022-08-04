//Function preview de tendecnia de peliculas
async function getTrendingMoviesPreview() {
    const res = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`);
    const data = await res.json();

    const movies = data.results; // Arroja un array
    //Manipulacion del DOM
    movies.forEach(movie => {
        const trendingPreviewMoviesContainer = document.querySelector("#trendingPreview .trendingPreview-movieList");//Guarda la etiqueta del HTML en una constante

        const movieContainer = document.createElement("div"); //Crea una nueva etiqueta div en el HTML 
        movieContainer.classList.add("movie-container"); // Mete la eqitueta creada en dentro de la etiqueta que se pasa en el id parentesis

        const movieImg = document.createElement("img"); //Crea una nueva etiqueta img en el HTML
        movieImg.classList.add("movie-img"); // Mete la etiqueta creada dentro de la etiqueta que se pasa en el id parentesis
        movieImg.setAttribute("all", movie.title); //Le pasamos el valor titulo de la pelicula que al atributo all
        movieImg.setAttribute("src", "https://image.tmdb.org/t/p/w300"+ movie.poster_path); //Le pasamos el valor titulo de la pelicula que al atributo all
    
        //Metemos las etiquetas dentro de otras etiquetas para dar la estructura qu trae el HTML
        movieContainer.appendChild(movieImg);
        trendingPreviewMoviesContainer.appendChild(movieContainer);


    console.log(movies);
    });
}


async function getGenresMoviesPreview() {
    const res = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`);
    const data = await res.json();

    const categories = data.genres; // Arroja un array
    //Manipulacion del DOM
    categories.forEach(category => {
        const previewCategoriesContainer = document.querySelector("#categoriesPreview .categoriesPreview-list");//Guarda la etiqueta del HTML en una constante

        const categoryContainer = document.createElement("div"); //Crea una nueva etiqueta div en el HTML 
        categoryContainer.classList.add("category-container"); // Mete la eqitueta creada en dentro de la etiqueta que se pasa en el id parentesis

        const categoryTitle = document.createElement("h3"); //Crea una nueva etiqueta h3 en el HTML
        categoryTitle.classList.add("category-title"); // Mete la etiqueta creada dentro de la etiqueta que se pasa en el id parentesis
        categoryTitle.setAttribute("id", category.id); //Le pasamos el id que nos arroja el array de genres
        const categoryTitleText = document.createTextNode(category.name); //Ponemos el texto de la categoria


        //Metemos las etiquetas dentro de otras etiquetas para dar la estructura qu trae el HTML
        categoryTitle.appendChild(categoryTitleText);
        categoryContainer.appendChild(categoryTitle);
        previewCategoriesContainer.appendChild(categoryContainer);
    });
}

getTrendingMoviesPreview();
getGenresMoviesPreview();