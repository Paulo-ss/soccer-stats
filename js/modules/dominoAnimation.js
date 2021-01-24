export default class DominoAnimation {
  constructor(elements, observerTarget, sectionActive, active) {
    // Elementos que serão animados
    this.elements = [...document.querySelectorAll(elements)];
    // Elemento observer que da o trigger na animação
    this.observerTarget = document.querySelector(observerTarget);
    // Classe CSS da animação ao scroll
    // (indica que o elemento apareceu na tela)
    this.sectionActive = sectionActive;
    // Classe CSS para animar os elementos
    this.active = active;

    // Bind nos métodos de callback
    this.animateDomino = this.animateDomino.bind(this);
  }

  // Método que faz a animação dominó
  animateDomino() {
    if (this.observerTarget.classList.contains(this.sectionActive)) {
      this.elements.forEach((element, index) => {
        setTimeout(() => {
          element.classList.add(this.active);
        }, index * 300);
      });

      this.observer.disconnect();
    }
  }

  // Método que começa o observer
  startObserver() {
    this.observer = new MutationObserver(this.animateDomino);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  // Método que inicia a classe
  init() {
    if (this.elements.length && this.observerTarget) {
      this.startObserver();
    }

    return this;
  }
}
