// Função com o template HTML da seção de campeonato-descricao da página de campeonato
export default function campDescHTML(campeonato) {
  const { logo, status } = campeonato;
  const { nome } = campeonato.edicao_atual;

  const innerHTML = `<div class="camp-img">
                        <img src="${logo}" alt="Logo do ${nome}">
                      </div>
                      <div class="camp-info">
                        <h1 class="titulo"> ${nome} </h1>
                        <span class="status"> ${status} </span>
                      </div>`;

  return innerHTML;
}
