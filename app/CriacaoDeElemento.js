
function RenderizarFilmes(film){
  Divp = document.querySelector('.area_de_cards')
  Divp.innerHTML = ''
    film.forEach(element => {
      Divp.innerHTML += `<div class="div_cards mt-5 d-flex flex-row justify-content-center">
              <div class="card_color card mb-3">
                  <div class="img_card card-img-top text-center" style="background-size:contain;background-image: url('https://image.tmdb.org/t/p/w400${element.backdrop_path}');">

                  </div>
                  <div class="card_area_de_if d-flex flex-row align-items-center">
                  <div class="card_area_de_if_tituloAvalicao mx-3 ">
                      <h5 class="card-title">${element.title}</h5>
                      <div class="curtir_fav d-flex flex-row">
                          <img src='./img/Star.png'/>
                          <button>Cur</button>
                      </div>
                  </div>
                  <div class="card_area_de_if_descricao ">
                    <p class="card-text">${element.overview}</p>
                  </div>
                  </div>
                </div>
          </div>`
    });
    
}