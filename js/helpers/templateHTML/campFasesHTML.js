// Função que retorna o innerHTML das fases do campeonato
export default function campFasesHTML(fases) {
  const { nome, status, tipo, fase_id: faseId } = fases;

  // Formatando a string de tipo
  const tipoFormatado = tipo
    .split('-')
    .map((i) => {
      const firstLetter = tipo.charAt(0).toUpperCase();
      return i.replace(/\w/i, firstLetter);
    })
    .join(' ');

  const innerHTML = `<a href="#camp-fase" id="${faseId}" data-scroll-trigger data-fetch-fase>
                      <div class="fase">
                        <div class="fase-info">
                          <h2> ${nome} </h2>
                          <p class="status"> ${status} </p>
                        </div>
                        <p class="tipo"> ${tipoFormatado} </p>
                      </div>
                      </a>`;

  return innerHTML;
}
