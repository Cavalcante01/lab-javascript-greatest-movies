// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

    
    function getAllDirectors(moviesArray) {
       return moviesArray.map(function (movies){
        return movies.director;
       })
        
       .filter(function (director, index, originArray){
        return originArray.indexOf(director) === index;
       });


    }
   

// Iteration 2: Steven Spielberg. The best? - How many drama movies did    function()direct?
function howManyMovies(moviesArray) {
    return moviesArray.filter(function (movies){
        return (movies.director === 'Steven Spielberg' && movies.genre.includes('Drama'));
    }).length;
 
  
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  return Number((moviesArray.reduce(function (acc, movie) {
    return acc + (movie.score || 0);
  }, 0) / Math.max(1, moviesArray.length)).toFixed(2));
}


  // Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((movie) =>
    movie.genre.includes("Drama")
  );
  const avgDramaMovieScore = scoresAverage(dramaMovies);
  return avgDramaMovieScore;
}






// Iteration 5: Ordering by year - Order by year, ascending (in growing order)



function orderByYear(moviesArray) {
  return [...moviesArray].sort(function(a, b) {
    return a.year - b.year || (a.title < b.title ? -1 : 1);
  });
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  return [...moviesArray].sort(function(a, b) {
    return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
  }).slice(0, 20).map(function(movie) {
    return movie.title;
  });
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
