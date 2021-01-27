// Importando a classe de FetchAPI
import FetchAPI from '../helpers/fetch/fetchAPI.js';
// Importando a função de template HTML da fase
import campFaseHTML from '../helpers/templateHTML/campFaseHTML.js';
// Importando o endpoint da fase específica
import { GET_CAMP_FASE } from '../helpers/endpoint/endpoints.js';

export default class FetchFase {
  constructor(fetchBtns, appendElement, active) {
    // Botões que fazem o fetch na fase específica do camepeonato
    this.fetchBtns = document.querySelectorAll(fetchBtns);
    // Elemento do DOM que recebe os dados retornados
    // da fase do campeonato
    this.appendElement = document.querySelector(appendElement);
    // Classe CSS active para o último botão clicado
    this.active = active;

    // Bind nos métodos de callback
    this.getFaseId = this.getFaseId.bind(this);
  }

  // Método estático que usando a classe de FetchAPI,
  // faz a requisição dos dados da fase específica do
  // campeonato
  static initFetchFase(id) {
    const fetchFase = new FetchAPI(
      '[data-append="camp-fase"]',
      campFaseHTML,
      GET_CAMP_FASE(id),
      true,
      'active'
    );
    fetchFase.init();
  }

  // Sempre que um novo botão é clicado e uma nova
  // requisição é feita, o elemento que recebe os
  // dados retornado tem seu innerHTMl resetado para
  // poder receber o novo
  removeInnerHTML() {
    this.appendElement.innerHTML = null;
  }

  // Método que adiciona o classe CSS de ativo
  // no último botão clicado
  addActiveClass(currentTarget) {
    this.fetchBtns.forEach((btn) => {
      btn.children[0].classList.remove(this.active);
    });

    currentTarget.children[0].classList.add(this.active);
  }

  // Método que pega o ID do botão clicado e executa
  // o método para fazer o fetch dos dados da fase
  // baseado no ID
  getFaseId({ currentTarget }) {
    this.removeInnerHTML();

    const id = currentTarget.getAttribute('id');
    FetchFase.initFetchFase(id);

    this.addActiveClass(currentTarget);
  }

  // Método que adicona os eventos de click nos
  // botões que fasem o fetch
  addEvents() {
    this.fetchBtns.forEach((btn) => {
      btn.addEventListener('click', this.getFaseId);
    });
  }

  // Método que inicia a classe
  init() {
    if (this.fetchBtns.length) {
      this.addEvents();
    }

    return this;
  }
}
