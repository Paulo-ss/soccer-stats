export default class TabNav {
  constructor(tabToggle, tabContent, active) {
    this.tabToggle = document.querySelectorAll(tabToggle);
    this.tabContent = document.querySelectorAll(tabContent);
    this.active = active;

    // Bind nos métodos de callback
    this.toggleTab = this.toggleTab.bind(this);
  }

  toggleTab(e) {
    e.preventDefault();
    // Removendo as classes de ativo
    this.tabToggle.forEach((i) => {
      i.classList.remove(this.active);
    });

    this.tabContent.forEach((i) => {
      i.classList.remove(this.active);
    });

    const tabToggleId = e.target.getAttribute('href');
    const content = document.querySelector(tabToggleId);

    content.classList.add(this.active);
    e.target.classList.add(this.active);
  }

  addEvents() {
    this.tabToggle.forEach((tab) => {
      tab.addEventListener('click', this.toggleTab);
    });
  }

  init() {
    if (this.tabToggle.length && this.tabContent.length) {
      this.addEvents();
      this.tabToggle[0].classList.add(this.active);
      this.tabContent[0].classList.add(this.active);
    }

    return this;
  }
}
