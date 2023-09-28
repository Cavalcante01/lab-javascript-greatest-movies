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


  





// ### Iteration 4: Drama movies


function dramaMoviesScore(moviesArray) {
  
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function dramaMoviesScore(moviesArray) {
  return (moviesArray.filter(function(movie) {
    return movie.genre.includes('Drama') && typeof movie.score === 'number';
  }).reduce(function(acc, movie) {
    return acc + movie.score;
  }, 0) / Math.max(1, moviesArray.length)).toFixed(2) || 0;
}

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
function turnHoursToMinutes(moviesArray) {
  return moviesArray.map(function(movie) {
    const [hours, minutes] = movie.duration.match(/\d+/g);
    return { ...movie, duration: +hours * 60 + +minutes };
  });
}


// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  const avgScoresByYear = {};

  moviesArray.forEach(({ year, score }) => (
    (avgScoresByYear[year] = avgScoresByYear[year] || []).push(score)
  ));

  const bestYear = Object.keys(avgScoresByYear).reduce((best, year) => (
    Math.max(...avgScoresByYear[year]) > Math.max(...avgScoresByYear[best]) ? year : best
  ));

  const bestAverage = avgScoresByYear[bestYear].reduce((sum, score) => sum + score) / avgScoresByYear[bestYear].length;

  return `The best year was ${bestYear} with an average score of ${bestAverage.toFixed(2)}`;
}

