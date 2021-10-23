const rawdata = require('./moviedata.json')

let data = []
function rebuild(input) {
    for (i in input){
        let set = input[i]
        for (j in set) {
            if (set[j] == set.Year) {
                //year to number
                set[j] = +set[j]

            } else if (set[j] == set.Runtime) {
                set[j] = set[j].split(' ')
                newSet = []
                //time strings to numbers
                newSet.push(+set[j][0], +set[j][2])
                //time to milliseconds
                set[j] = newSet[0] * 3600000 + newSet[1] * 60000

            } else if (set[j] == set.Genre) {
                //convert string to array
                set[j] = set[j].split(', ')

            } else if (set[j] == set.Director) {
                //convert string to array
                set[j] = set[j].split(', ')

            } else if (set[j] == set.Writer) {
                //convert string to array
                set[j] = set[j].split(', ')

            } else if (set[j] == set.Actors) {
                //convert string to array
                set[j] = set[j].split(', ')

            } else if (set[j] == set.imdbRating) {
                //convert string to number
                set[j] = +set[j]

            } else if (set[j] == set.imdbVotes) {
                //convert string to number, remove commas before that
                set[j] = +set[j].split(',').join('')

            } 
        }
        //push into new data array
        data.push(input[i])
      }
    return data
}
data = rebuild(rawdata)

//Finding movies released between 1962-72
function movieRange(y1, y2) {
    return data.filter((movie) => {
      return movie.Year >= y1 && movie.Year <= y2
    })
  }
const movies = movieRange(1962, 1972)

let maxRating = movies.reduce((max, item) => max.imdbRating > item.imdbRating ? max : item)
let maxVotes = movies.reduce((max, item) => max.imdbVotes > item.imdbVotes ? max : item)

//Ex1 logs
console.log("Ex.1")
function logMovies(movies) {
    console.log('Movies released between 1962 and 1972 are: ', )
    for (let i = 0; i < movies.length; i++) {
        console.log(movies[i].Title)
    }
}
const logSelectionTitle = logMovies(movies)
console.log("Best rated movie is " + maxRating.Title + ", directed by " + maxRating.Director + " and was released in " + maxRating.Released)
console.log("Most rated movie is " + maxVotes.Title + ", directed by " + maxVotes.Director + " and was released in " + maxRating.Released)

//Ex2
const selectionByGenre = data.filter((movie) => {
    if (movie.Genre.includes('Drama')) {
        return movie
    }
})

let maxRating2 = selectionByGenre.reduce((max, item) => max.imdbRating > item.imdbRating ? max : item)
let maxVotes2 = selectionByGenre.reduce((max, item) => max.imdbVotes > item.imdbVotes ? max : item)

//Ex2 logs
console.log("Ex. 2")
console.log("Best rated drama is " + maxRating2.Title + ", directed by " + maxRating2.Director + " and was released in " + maxRating2.Released)
console.log("Most rated drama is " + maxVotes2.Title + ", directed by " + maxVotes2.Director + " and was released in " + maxRating2.Released)


//Ex.3

const selectionByRated = data.filter((movie) => {
    if (movie.Rated.includes('R')) {
        return movie
    }
})

//3.2
const names = []
function getMovieNames(input) {
    for (let i = 0; i < input.length; i++) {
        names.push(input[i].Title)
    }
    return names.join(', ')
}

console.log('\n' + 'Movies that are rated R are:' + '\n', getMovieNames(selectionByRated) + '.')

//3.3

const actors = []
function getActorNames(input) {
    for (let i = 0; i < input.length; i++) {
        n = input[i].Actors
        for (let j = 0; j < n.length; j++) {
            actors.push(n[j])
        }
    }
    //removes doubles and adds commas
    let uniqActors = [...new Set(actors)]  
    return uniqActors.join(', ')
}
//3.4
console.log('\n' + 'Actors that played in those movies:' + '\n', getActorNames(selectionByRated) + '.')//the '.' was not required, but it looks ok
