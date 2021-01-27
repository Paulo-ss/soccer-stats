export default function teste(fase) {
  // Dados principais da fase selecionada
  const { nome, status } = fase;

  // Função que cria a div de partida
  function createDiv() {
    const div = document.createElement('div');
    div.classList.add('partida');

    return div;
  }

  // Fazendo um loop por cada chave da fase
  const arrayChave = fase.chaves.map((chave) => {
    // Dados principais da chave
    const { nome: nomeFase } = chave;
    // Nome do estádio onde o jogo foi realizado
    const { nome_popular: nomeEstadio } = chave.partida_ida.estadio;
    // Dados da partida de ida
    const {
      partida_id: partidaIdaID,
      placar: placarIda,
      status: statusFase,
      data_realizacao: dataRealizacao,
      hora_realizacao: horaRealizacao,
    } = chave.partida_ida;
    // Time mandante da ida
    const {
      escudo: escudoM,
      nome_popular: nomeTimeM,
    } = chave.partida_ida.time_mandante;
    // Time visitante da ida
    const {
      escudo: escudoV,
      nome_popular: nomeTimeV,
    } = chave.partida_ida.time_visitante;

    // Criando a div de partida
    const partidaDiv = createDiv();
    // Definindo o innerHTML da div de partida
    partidaDiv.innerHTML = `<a href="partida.html?id=${partidaIdaID}">
                              <h3> ${nomeFase} - Partida ida <span class="em-andamento"> ${statusFase} </span> </h3>
                              <div class="placar">
                                <img class="escudo" src="${escudoM}" alt="Escudo do ${nomeTimeM}">
                                <p> ${placarIda} </p>
                                <img class="escudo" src="${escudoV}" alt="Escudo do ${nomeTimeV}">
                              </div>
                              <div class="info">
                                <p> ${dataRealizacao} </p>
                                <p> ${horaRealizacao} </p>
                                <p> ${nomeEstadio} </p>
                              </div>
                            </a>`;

    return partidaDiv;
  });

  // innerHTML da div que vai receber as divs que foram
  // criadas no loop pelas chaves da fase
  const innerHTML = `<div class="info">
                      <h2> ${nome} </h2>
                      <span class="status"> ${status} </span>
                    </div>`;

  // Div principal que recebe todos os elementos criados
  const newElement = document.createElement('div');
  newElement.innerHTML = innerHTML;

  // Função que faz o append na div criada acima
  function appendHTML(html) {
    newElement.append(html);
  }

  // Percorrendo cada div na arrayChave e posicionando
  // cada um deles na div principal
  arrayChave.forEach((i) => {
    appendHTML(i);
  });

  // Retornando o innerHTML da div principal
  return newElement.innerHTML;
}
