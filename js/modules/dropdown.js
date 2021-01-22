export default class dropdown {
  constructor(dropToggle, dropMenu, active) {
    // Toggler do dropdown
    this.dropToggle = document.querySelector(dropToggle);
    // Dropdown-menu
    this.dropMenu = document.querySelector(dropMenu);
    // Classe CSS ativo
    this.active = active;
    // Selecionando o HTML
    this.html = document.documentElement;

    // Bind nos métodos de callback
    this.activateDropdown = this.activateDropdown.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  // Método para fechar o dropdown
  closeDropdown() {
    this.dropToggle.classList.remove(this.active);
    this.dropMenu.classList.remove(this.active);
  }

  // Método que lida com o click fora do dropdown
  handleClickOutside({ target }) {
    if (!this.dropMenu.contains(target)) {
      this.closeDropdown();
      this.html.removeEventListener('click', this.handleClickOutside);
    }
  }

  // Método que aplica o event de click ao <html>
  clickOutside() {
    setTimeout(() => {
      this.html.addEventListener('click', this.handleClickOutside);
    });
  }

  // Método que da o toggle no dropdown
  activateDropdown() {
    this.dropToggle.classList.toggle(this.active);
    this.dropMenu.classList.toggle(this.active);

    if (this.dropMenu.classList.contains('active')) {
      this.clickOutside();
    }
  }

  // Método que adiciona o event listener no toggle
  addEvents() {
    this.dropToggle.addEventListener('click', this.activateDropdown);
  }

  // Método que inicia a classe
  init() {
    if (this.dropToggle && this.dropMenu) {
      this.addEvents();
    }
    return this;
  }
}
