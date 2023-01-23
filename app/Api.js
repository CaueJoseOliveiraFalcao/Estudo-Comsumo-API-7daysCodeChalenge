
async function getMovies(){
    const url = 'https://api.themoviedb.org/3/movie/76341?api_key=2fa38ec709fb23b7b35bacc88a82e18a&language=pt-BR'
    const fetchResponse = await fetch(url)
    const movies = await fetchResponse.json()
    console.log(movies)
}

getMovies()