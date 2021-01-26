// Função que retorna o template de HTML do slide na página de campeonato
export default function partidasHTML(partida) {
  const innerHTML = `<div class="partida" data-slide>
                      <a href="partida.html?id=${partida_id}">
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
