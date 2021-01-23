export default class MenuMobile {
  constructor(menuToggle, menuContent, active) {
    this.menuToggle = document.querySelector(menuToggle);
    this.menuContent = document.querySelector(menuContent);
    // Classe CSS active
    this.active = active;

    // Bind nos métodos de callback
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    // Faz o toggle na classe de active no toggle e no menu
    this.menuToggle.classList.toggle(this.active);
    this.menuContent.classList.toggle(this.active);

    // Remove o overflow da página caso o menu esteja ativo
    if (this.menuContent.classList.contains(this.active)) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  // Método que adiciona o event ao menu toggle
  addEvents() {
    this.menuToggle.addEventListener('click', this.toggleMenu);
    this.menuToggle.addEventListener('touch', this.toggleMenu);
  }

  // Método que inicia a classe
  init() {
    if (this.menuToggle && this.menuContent) {
      this.addEvents();
    }

    return this;
  }
}
