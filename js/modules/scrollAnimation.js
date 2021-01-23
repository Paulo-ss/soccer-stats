// Importando a função helper de debounce
import debounce from '../helpers/debounce.js';

export default class ScrollAnimation {
  constructor(sections, active) {
    // Selecionando as seções do site que serão animadas
    this.sections = [...document.querySelectorAll(sections)];
    // Valor da métade da tela do browser
    this.halfWindow = window.innerHeight * 0.6;
    // Classe CSS para ativar as animações das sections
    this.active = active;

    // Bind nos métodos de callback
    this.animateScroll = debounce(this.animateScroll.bind(this), 80);
  }

  // Método que pega a distância do topo de cada section
  getSectionsOffsetTop() {
    this.sectionsOffsetTop = this.sections.map((section) => {
      return {
        element: section,
        offsetTop: section.offsetTop - this.halfWindow,
      };
    });
  }

  // Método que anima as sections ao scroll
  animateScroll() {
    const scrollPosition = window.pageYOffset;

    this.sectionsOffsetTop.forEach((i) => {
      if (scrollPosition > i.offsetTop) {
        i.element.classList.add(this.active);
      }
    });
  }

  // Método que adiciona o event de scroll ao window
  addEvents() {
    window.addEventListener('scroll', this.animateScroll);
  }

  // Método que inicia a classe
  init() {
    if (this.sections.length) {
      this.addEvents();
      this.getSectionsOffsetTop();
      this.animateScroll();
    }

    return this;
  }
}
