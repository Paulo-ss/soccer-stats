// Função que retorna o innerHTML de dropdown
export default function dropdownHTML(campeonato) {
  const { campeonato_id, nome } = campeonato;

  const innerHTML = `<li>
                        <a href="https://api.api-futebol.com.br/v1/campeonatos/${campeonato_id}"> 
                          ${nome} 
                        </a>
                      </li>`;

  return innerHTML;
}
