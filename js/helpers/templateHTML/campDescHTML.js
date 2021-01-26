// Função com o template HTML da seção de campeonato-descricao da página de campeonato
export default function campDescHTML(campeonato) {
  const { logo, status } = campeonato;
  const { nome } = campeonato.edicao_atual;
  const { tipo } = campeonato.fases[1];

  // Formatando a string de tipo
  const tipoFormatado = tipo
    .split('-')
    .map((tipo) => {
      const firstLetter = tipo.charAt(0).toUpperCase();
      return tipo.replace(/\w/i, firstLetter);
    })
    .join(' ');

  const innerHTML = `<div class="camp-img">
                        <img src="${logo}" alt="Logo do ${nome}">
                      </div>
                      <div class="camp-info">
                        <div>
                          <h1 class="titulo"> ${nome} </h1>
                          <div class="tipo"> ${tipoFormatado} </div>
                        </div>
                        <span class="status"> ${status} </span>
                      </div>`;

  return innerHTML;
}
