export default class dropdown {
  constructor(dropToggle, dropMenu, active) {
    this.dropToggle = document.querySelector(dropToggle);
    this.dropMenu = document.querySelector(dropMenu);
    this.active = active;

    // Bind nos métodos de callback
    this.activateDropdown = this.activateDropdown.bind(this);
  }

  // Método que da o toggle no dropdown
  activateDropdown() {
    this.dropToggle.classList.toggle(this.active);
    this.dropMenu.classList.toggle(this.active);
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
