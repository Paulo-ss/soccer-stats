// Função que gera as tabs da navegação por tabs
export default function navTabHTML(campeonato) {
  const { slug, nome } = campeonato;

  const innerHTML = `<a href="#${slug}" data-toggle-tab> ${nome} </a>`;

  return innerHTML;
}
