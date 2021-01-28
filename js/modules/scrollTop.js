// Importando a função de debounce
import debounce from '../helpers/debounce.js';
// Importando a função de matchMedia
import media from '../helpers/matchMedia.js';

export default class ScrollTop {
  constructor(scrollBtn, active) {
    // Botão que da scroll pro topo da página
    this.scrollBtn = document.querySelector(scrollBtn);
    // Classe CSS active para mostrar o botão
    this.active = active;

    // Bind nos métodos de callback
    this.handleScroll = debounce(this.handleScroll.bind(this), 80);
    this.scrollToTop = this.scrollToTop.bind(this);
    this.verifyWindowSize = debounce(this.verifyWindowSize.bind(this), 80);
  }

  // Método que da scroll pro topo da página
  // eslint-disable-next-line class-methods-use-this
  scrollToTop() {
    document.body.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  // Método que faz o toggle da classe de active
  // no botão de scroll pro topo
  toggleScrollBtn(state) {
    if (state) {
      this.scrollBtn.classList.add(this.active);
      this.scrollBtn.addEventListener('click', this.scrollToTop);
    } else {
      this.scrollBtn.classList.remove(this.active);
      this.scrollBtn.removeEventListener('click', this.scrollToTop);
    }
  }

  // Método que verifica a posição do scroll e mostra
  // ou não o botão para dar scroll pro topo
  handleScroll() {
    const scrollPosition = window.pageYOffset;

    if (scrollPosition >= 100) {
      this.toggleScrollBtn(true);
    } else {
      this.toggleScrollBtn(false);
    }
  }

  // Método que verifica o tamanho da janela. O botão só
  // aparece em telas médias de 1099px ou menor
  verifyWindowSize() {
    const matchMedia = media('(max-width: 1099px)');

    if (matchMedia) {
      window.addEventListener('scroll', this.handleScroll);
    } else {
      window.removeEventListener('scroll', this.handleScroll);
      this.toggleScrollBtn(false);
    }
  }

  // Método que adiciona o evento de resize no window
  addEvents() {
    window.addEventListener('resize', this.verifyWindowSize);
  }

  // Método que inicia a classe
  init() {
    if (this.scrollBtn && this.active) {
      this.addEvents();
      this.verifyWindowSize('(max-width: 1099px)');
    }

    return this;
  }
}
