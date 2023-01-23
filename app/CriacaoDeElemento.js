const movies = [
    {
      image: 'https://img.elo7.com.br/product/original/3FBA809/big-poster-filme-batman-2022-90x60-cm-lo002-poster-batman.jpg',
      title: 'Batman',
      rating: 9.2,
      year: 2022,
      description: "Descrição do filme…",
      isFavorited: true,
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/9/9b/Avengers_Endgame.jpg/250px-Avengers_Endgame.jpg',
      title: 'Avengers',
      rating: 9.2,
      year: 2019,
      description: "Descrição do filme…",
      isFavorited: false
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/en/1/17/Doctor_Strange_in_the_Multiverse_of_Madness_poster.jpg',
      title: 'Doctor Strange',
      rating: 9.2,
      year: 2022,
      description: "Descrição do filme…",
      isFavorited: false
    },
  ]
  movies.forEach(element => {
    RenderizarFilmes(element)
  });

function RenderizarFilmes(film){
    Divp = document.querySelector('.area_de_cards')

    Divp.innerHTML += `<div class="div_cards mt-5 d-flex flex-row justify-content-center">
            <div class="card_color card mb-3">
                <div class="img_card card-img-top text-center" style="background-image: url('${film.image}');">

                </div>
                <div class="card_area_de_if d-flex flex-row align-items-center">
                <div class="card_area_de_if_tituloAvalicao mx-5 ">
                    <h5 class="card-title">${film.title}</h5>
                    <div class="curtir_fav d-flex flex-row">
                        <button>Fav</button>
                        <button>Cur</button>
                    </div>
                </div>
                <div class="card_area_de_if_descricao ">
                  <p class="card-text">${film.description}</p>
                </div>
                </div>
              </div>
        </div>`
}