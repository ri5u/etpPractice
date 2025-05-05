let movies = [];

$("#movie-form").submit((e)=>{
    e.preventDefault();
    
    const title = $("#title").val().trim();
    const year = $("#year").val().trim();
    const genre = $("#genre").val().trim();

    if(!title || !year || !genre){
        alert("Please fill all the fields");
        return;
    }

    const movie = {
        id: Date.now(),
        title, year, genre
    };

    movies.push(movie);
    console.log("Movie Added: ", movie);
    console.log("All movies", movies);

    showMovies();
    $("#title, #year, #genre").val("");
});


function showMovies(){
    const $movieList = $("#movie-list");
    $movieList.empty();

    movies.forEach((movie)=>{
        $movieList.append(
            `<li data-id="${movie.id}">
            ${movie.title} ${movie.year} ${movie.genre} 
            <button class="delete-btn">Delete</button>
            </li>`
        )
    });
}


$("#movie-list").on("click", ".delete-btn", function(){
    const movieId = Number($(this).parent().data("id"));
    movies = movies.filter(movie => movie.id !== movieId);

    showMovies();

})