// Importando a função helper de macthMedia
import media from '../helpers/matchMedia.js';
// Importando a função helper de debounce
import debounce from '../helpers/debounce.js';

export default class Slide {
  constructor(prevBtn, nextBtn, slideContent, slide, active) {
    // Botão que muda o slide para o anterior
    this.prevBtn = document.querySelector(prevBtn);
    // Botão que muda o slide para o próximo
    this.nextBtn = document.querySelector(nextBtn);
    // Slide container
    this.slideContent = document.querySelector(slideContent);
    // Slide
    this.slide = [...document.querySelectorAll(slide)];
    // Classe CSS active
    this.active = active;
    // Estado atual do slide
    this.currentSlide = 0;
    // Verifica se existem próximos slides
    this.totalNext = media('(max-width: 799px)')
      ? this.slide.length - 1
      : Math.floor((this.slide.length - 1) / 2);

    // Bind dos métodos de callback
    this.goToPrevSlide = this.goToPrevSlide.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);

    // Bind e aplicando debounce nos métodos de callback do evento de resize
    this.verifyMedia = debounce(this.verifyMedia.bind(this), 100);
    this.goToCurrentSlide = debounce(this.goToCurrentSlide.bind(this), 100);
  }

  verifySlides() {
    // Verifica se eistem slides anteriores para mostrar
    // ou não o botão de anterior
    if (this.currentSlide > 0) {
      this.prevBtn.classList.add(this.active);
    } else {
      this.prevBtn.classList.remove(this.active);
    }

    // Verifica se existem próximos slides para mostrar
    // ou não o botão de próximo
    if (this.currentSlide < this.totalNext) {
      this.nextBtn.classList.add(this.active);
    } else {
      this.nextBtn.classList.remove(this.active);
    }
  }

  // Atualiza o valor do total de próximos slides
  // no resize da página
  verifyMedia() {
    this.totalNext = media('(max-width: 799px)')
      ? this.slide.length - 1
      : Math.floor((this.slide.length - 1) / 2);

    if (this.currentSlide > this.totalNext) {
      this.currentSlide = this.totalNext;
    }

    this.verifySlides();
  }

  // Método para pegar a largura do container do slide
  // e mudar o valor do translate de acordo com o slide
  // ativo no momento
  slideInfo() {
    const { width } = this.slideContent.getBoundingClientRect();

    return -((width + 16) * this.currentSlide);
  }

  // Faz a animação de translate no container dos slides
  moveSlide(translate) {
    this.slideContent.style.transform = `translateX(${translate}px)`;
  }

  // Muda para o slide anterior
  goToPrevSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
      this.moveSlide(this.slideInfo());
      this.verifySlides();
    }
  }

  // Muda para o próximo slide
  goToNextSlide() {
    if (this.currentSlide < this.totalNext) {
      this.currentSlide++;
      this.moveSlide(this.slideInfo());
      this.verifySlides();
    }
  }

  // Move para o slide atual ao resize da página
  goToCurrentSlide() {
    this.moveSlide(this.slideInfo());
  }

  // Adiciona o evento de resize no window
  windowResize() {
    window.addEventListener('resize', () => {
      this.verifyMedia();
      this.goToCurrentSlide();
    });
  }

  // Adicionando os eventos aos botões controladores do slide
  addEvents() {
    this.prevBtn.addEventListener('click', this.goToPrevSlide);
    this.prevBtn.addEventListener('touch', this.goToPrevSlide);

    this.nextBtn.addEventListener('click', this.goToNextSlide);
    this.nextBtn.addEventListener('touch', this.goToPrevSlide);
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
      this.windowResize();
      this.verifyMedia();
      this.verifySlides();
    }

    return this;
  }
}
