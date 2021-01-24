// Função que gera o HTML das cards dos campeonatos na
// section de campeonatos na home
export default function campCardHTML(campeonato) {
  const { campeonato_id, nome, slug, status, tipo, logo } = campeonato;
  const { temporada } = campeonato.edicao_atual;
  const { nome: nomeFase } = campeonato.fase_atual;

  const innerHTML = `<div class="campeonato-card" id="${slug}" data-tab-content>
                        <a href="campeonato.html/${campeonato_id}">
                          <div class="card-img">
                            <img src="${logo}" alt="Logo ${nome}">
                          </div>
                        </a>
                        <div class="card-content">
                          <h2 class="card-title"> ${nome} </h2>
                          <p class="card-info"> Temporada: ${temporada} </p>
                          <p class="card-info"> Status: ${status} </p>
                          <p class="card-info"> Fase atual: ${nomeFase} </p>
                          <p class="card-info"> Tipo: ${tipo} </p>
                        </div>
                      </div>`;

  return innerHTML;
}
