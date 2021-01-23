export default class Slide {
  constructor(prevBtn, nextBtn, slideContent, slide) {
    // Botão que muda o slide para o anterior
    this.prevBtn = document.querySelector(prevBtn);
    // Botão que muda o slide para o próximo
    this.nextBtn = document.querySelector(nextBtn);
    // Slide container
    this.slideContent = document.querySelector(slideContent);
    // Slide
    this.slide = [...document.querySelectorAll(slide)];
    // Estado atual do slide
    this.currentSlide = 0;

    // Bind dos métodos de callback
    this.goToPrevSlide = this.goToPrevSlide.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);
  }

  // Método para pegar a largura do container do slide
  // e mudar o valor do translate de acordo com o slide
  // ativo no momento
  slideInfo() {
    const { width } = this.slideContent.getBoundingClientRect();

    return -(width * this.currentSlide);
  }

  moveSlide(translate) {
    this.slideContent.style.transform = `translateX(${translate}px)`;
  }

  // Muda para o slide anterior
  goToPrevSlide() {
    if (this.currentSlide > 0) {
      this.moveSlide(this.slideInfo(this.currentSlide--));
    }
  }

  // Muda para o próximo slide
  goToNextSlide() {
    if (this.currentSlide < this.slide.length - 1) {
      this.moveSlide(this.slideInfo(this.currentSlide++));
    }
  }

  // Adicionando os eventos aos botões controladores do slide
  addEvents() {
    this.prevBtn.addEventListener('click', this.goToPrevSlide);
    this.nextBtn.addEventListener('click', this.goToNextSlide);
  }

  // Método que inicia a classe
  init() {
    if (
      this.prevBtn &&
      this.nextBtn &&
      this.slideContent &&
      this.slide.length
    ) {
      this.addEvents();
    }

    return this;
  }
}
