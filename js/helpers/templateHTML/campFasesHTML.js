// Função que retorna o innerHTML das fases do campeonato
export default function campFasesHTML(fases) {
  const { nome, status, tipo, fase_id } = fases;

  // Formatando a string de tipo
  const tipoFormatado = tipo
    .split('-')
    .map((tipo) => {
      const firstLetter = tipo.charAt(0).toUpperCase();
      return tipo.replace(/\w/i, firstLetter);
    })
    .join(' ');

  const innerHTML = `<div class="fase" id="${fase_id}">
                      <div class="fase-info">
                        <h2> ${nome} </h2>
                        <p class="status"> ${status} </p>
                      </div>
                      <p class="tipo"> ${tipoFormatado} </p>
                    </div>`;

  return innerHTML;
}
