const inputSearch = document.querySelector('.input_procurar')
const key = '?api_key=2fa38ec709fb23b7b35bacc88a82e18a';

function getInput(){
    InputValue = inputSearch.value
    var InputValueWhioutSpace = InputValue.replace(/\s/g, '');
    getMoviesFromInput(InputValueWhioutSpace)

}

async function getMoviesFromInput(Input){

    const url = `https://api.themoviedb.org/3/search/movie${key}&query=${Input}&language=pt-BR`

    const fetchResponse = await fetch(url)
    const movies = await fetchResponse.json()
    let popularMovies = movies.results
    RenderizarFilmes(popularMovies)
}

async function ShowPopularMovies(){

    const url = `https://api.themoviedb.org/3/movie/popular${key}&language=en-US&page=1`
    const response = await fetch(url)
    const jsonResponse = await response.json()
    RenderizarFilmes(jsonResponse.results)
}

ShowPopularMovies()
