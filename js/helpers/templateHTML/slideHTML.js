// Função que retorna o template de HTML do slide
export default function slideHTML(partida) {
  const {
    partida_id,
    placar,
    status,
    data_realizacao,
    hora_realizacao,
  } = partida;
  const { nome: nomeCampeonato } = partida.campeonato;
  const { nome_popular: nomeEstadio } = partida.estadio;
  const { nome_popular: nomeTimeM, escudo: escudoM } = partida.time_mandante;
  const { nome_popular: nomeTimeV, escudo: escudoV } = partida.time_visitante;

  const innerHTML = `<div class="partida" data-slide>
                      <a href="partida.html/${partida_id}">
                        <h3> ${nomeCampeonato} <span class="em-andamento"> ${status} </span> </h3>
                        <div class="placar">
                          <img class="escudo" src="${escudoM}" alt="Escudo do ${nomeTimeM}">
                          <p> ${placar} </p>
                          <img class="escudo" src="${escudoV}" alt="Escudo do ${nomeTimeV}">
                        </div>
                        <div class="info">
                          <p> ${data_realizacao} </p>
                          <p> ${hora_realizacao} </p>
                          <p> ${nomeEstadio} </p>
                        </div>
                      </a>
                    </div>`;

  return innerHTML;
}
