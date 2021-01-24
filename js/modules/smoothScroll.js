export default class SmoothScroll {
  constructor(scrollBtns, menuToggle, menuCotent, active) {
    // Links que ativam o scroll suave para uma section
    this.scrollBtns = document.querySelectorAll(scrollBtns);

    // Botão que da o toggle no menu mobile
    this.menuToggle = document.querySelector(menuToggle);
    // Menu mobile
    this.menuCotent = document.querySelector(menuCotent);
    // Classe CSS active que o menu mobile recebe quanto está ativo
    this.active = active;

    // Bind nos métodos de callback
    this.scrollToSection = this.scrollToSection.bind(this);
    this.closeMenuMobile = this.closeMenuMobile.bind(this);
  }

  // Quando está no mobile, quando o link na navegação por clicado
  // e o scroll pra section for acionado, o menu mobile é fechado
  // e o scroll da página adicionado novamente
  closeMenuMobile() {
    this.menuToggle.classList.remove(this.active);
    this.menuCotent.classList.remove(this.active);

    document.body.style.overflow = 'auto';
  }

  // Método que faz o scroll suave até a section
  scrollToSection(e) {
    e.preventDefault();

    const targetID = e.target.getAttribute('href');
    const target = document.querySelector(targetID);

    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  // Método que adiciona os eventos de click nos botões
  addEvents() {
    this.scrollBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        this.scrollToSection(e);
        this.closeMenuMobile();
      });
    });
  }

  // Método que inicia a classe
  init() {
    if (this.scrollBtns.length) {
      this.addEvents();
    }

    return this;
  }
}
