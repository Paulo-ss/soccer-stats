// Função que retorna o template HTML com as informações
// da partida na página partida.html
export default function partidaInfoHTML(partida) {
  // Puxando as informações do json da api
  // Nome do campeonato
  const { nome: nomeCampeonato } = partida.campeonato.edicao;

  // Escudo e nome do time mandante
  const {
    escudo: escudoTimeM,
    nome_popular: nomeTimeM,
  } = partida.time_mandante;

  // Escudo e nome do time visitante
  const {
    escudo: escudoTimeV,
    nome_popular: nomeTimeV,
  } = partida.time_visitante;

  // Estádio do jogo
  const { nome_popular: nomeEstadio } = partida.estadio;

  // Placar, data e hora que o jogo aconteceu
  const {
    placar,
    data_realizacao: dataRealizacao,
    hora_realizacao: horaRealizacao,
  } = partida;

  // Estatísticas do time mandante
  // Posse de bola, escanteios, impedimentos e faltas
  const {
    posse_de_bola: posseBolaM,
    escanteios: escanteiosM,
    impedimentos: impedimentosM,
    faltas: faltasM,
  } = partida.estatisticas.mandante;

  // Total e precisão de passe
  const {
    total: totalPassesM,
    precisao: precisaoPassesM,
  } = partida.estatisticas.mandante.passes;

  // Chutes e chutes a gol
  const {
    total: chutesM,
    no_gol: chutesGolM,
  } = partida.estatisticas.mandante.finalizacao;

  // Estatísticas do time visitante
  // Posse de bola, escanteios, impedimentos e faltas
  const {
    posse_de_bola: posseBolaV,
    escanteios: escanteiosV,
    impedimentos: impedimentosV,
    faltas: faltasV,
  } = partida.estatisticas.visitante;

  // Total e precisão de passe
  const {
    total: totalPassesV,
    precisao: precisaoPassesV,
  } = partida.estatisticas.visitante.passes;

  // Chutes e chutes a gol
  const {
    total: chutesV,
    no_gol: chutesGolV,
  } = partida.estatisticas.visitante.finalizacao;

  // Cartões amarelos dos times
  const {
    mandante: cartoesAmareloM,
    visitante: cartoesAmareloV,
  } = partida.cartoes.amarelo;

  // Cartões vermelhos dos times
  const {
    mandante: cartoesVermelhoM,
    visitante: cartoesVermelhoV,
  } = partida.cartoes.vermelho;

  const innerHTML = `<div class="section-header">
                        <h1 class="titulo"> ${nomeCampeonato} </h1>
                      </div>
                      <div class="partida-placar">
                        <img class="escudo" src="${escudoTimeM}" alt="Escudo do ${nomeTimeM}">
                        <p> ${placar} </p>
                        <img class="escudo" src="${escudoTimeV}" alt="Escudo do ${nomeTimeV}">
                      </div>
                      <div class="partida-info">
                        <p> ${dataRealizacao} </p>
                        <p> ${horaRealizacao} </p>
                        <p> ${nomeEstadio} </p>
                      </div>
                      <div class="partida-gols">
                        <div class="gols">
                          <p> Rony 30' </p>
                          <p> Rony 31' </p>
                          <p> Rony 32' </p>
                          <p> Rony 33' </p>
                        </div>
                        <img class="bola" src="./img/soccer-ball-retina.png" alt="Ícone de uma bola de futebol">
                        <div class="gols">
                          <p> Luiz Adriano 34' </p>
                          <p> Luiz Adriano 35' </p>
                          <p> Luiz Adriano 36' </p>
                          <p> Luiz Adriano 37' </p>
                        </div>
                      </div>
                      <div class="partida-stats">
                        <table class="stats">
                          <thead>
                            <tr>
                              <th>
                                <img class="escudo" src="${escudoTimeM}" alt="Escudo do ${nomeTimeM}">
                              </th>
                              <th>
                                <p> ESTATÍSTICAS DOS TIMES </p>
                              </th>
                              <th>
                                <img class="escudo" src="${escudoTimeV}" alt="Escudo do ${nomeTimeV}">
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <!-- Chutes -->
                            <tr>
                              <td>
                                <p> ${chutesM} </p>
                              </td>
                              <td>
                                <p class="bold"> Chutes </p>
                              </td>
                              <td>
                                <p> ${chutesV} </p>
                              </td>
                            </tr>
                            <!-- Chutes a gols -->
                            <tr>
                              <td>
                                <p> ${chutesGolM} </p>
                              </td>
                              <td>
                                <p class="bold"> Chutes a gol </p>
                              </td>
                              <td>
                                <p> ${chutesGolV} </p>
                              </td>
                            </tr>
                            <!-- Posse de bola -->
                            <tr>
                              <td>
                                <p> ${posseBolaM} </p>
                              </td>
                              <td>
                                <p class="bold"> Posse de bola </p>
                              </td>
                              <td>
                                <p> ${posseBolaV} </p>
                              </td>
                            </tr>
                            <!-- Passes -->
                            <tr>
                              <td>
                                <p> ${totalPassesM} </p>
                              </td>
                              <td>
                                <p class="bold"> Passes </p>
                              </td>
                              <td>
                                <p> ${totalPassesV} </p>
                              </td>
                            </tr>
                            <!-- Precisão de passe -->
                            <tr>
                              <td>
                                <p> ${precisaoPassesM} </p>
                              </td>
                              <td>
                                <p class="bold"> Precisão de passe </p>
                              </td>
                              <td>
                                <p> ${precisaoPassesV} </p>
                              </td>
                            </tr>
                            <!-- Faltas -->
                            <tr>
                              <td>
                                <p> ${faltasM} </p>
                              </td>
                              <td>
                                <p class="bold"> Faltas </p>
                              </td>
                              <td>
                                <p> ${faltasV} </p>
                              </td>
                            </tr>
                            <!-- Cartões amarelos -->
                            <tr>
                              <td>
                                <p> ${cartoesAmareloM.length} </p>
                              </td>
                              <td>
                                <p class="bold"> Cartões amarelos </p>
                              </td>
                              <td>
                                <p> ${cartoesAmareloV.length} </p>
                              </td>
                            </tr>
                            <!-- Cartões vermelhos -->
                            <tr>
                              <td>
                                <p> ${cartoesVermelhoM.length} </p>
                              </td>
                              <td>
                                <p class="bold"> Cartões vermelhos </p>
                              </td>
                              <td>
                                <p> ${cartoesVermelhoV.length} </p>
                              </td>
                            </tr>
                            <!-- Impedimentos -->
                            <tr>
                              <td>
                                <p> ${impedimentosM} </p>
                              </td>
                              <td>
                                <p class="bold"> Impedimentos </p>
                              </td>
                              <td>
                                <p> ${impedimentosV} </p>
                              </td>
                            </tr>
                            <!-- Escanteios -->
                            <tr>
                              <td>
                                <p> ${escanteiosM} </p>
                              </td>
                              <td>
                                <p class="bold"> Escanteios </p>
                              </td>
                              <td>
                                <p> ${escanteiosV} </p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>`;

  return innerHTML;
}
