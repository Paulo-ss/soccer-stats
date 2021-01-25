// Importando os endpoints da API
import {
  GET_CAMPEONATOS,
  GET_PARTIDAS_AO_VIVO,
} from './helpers/endpoint/endpoints.js';

// Importando as funções de template HTML que serão gerados
import campCardHTML from './helpers/templateHTML/campCard.js';
import navTabHTML from './helpers/templateHTML/navTab.js';
import dropdownHTML from './helpers/templateHTML/dropdown.js';
import slideHTML from './helpers/templateHTML/slideHTML.js';

// Importando a classe que realiza o fecth na API
import FetchAPI from './helpers/fetch/fetchAPI.js';

// Importando a função que pega os parâmetros da URL da página
import getURLParams from './helpers/getUrlParams/getUrlParams.js';

// Importando a classe do Dropdown
import Dropdown from './modules/dropdown.js';
// Importando a classe da navegação por tabs
import TabNav from './modules/tabNav.js';
// Importando a classe do slide
import Slide from './modules/slide.js';
// Importando a classe do menuMobile
import MenuMobile from './modules/menuMobile.js';
// Importando a classe que anima as seções do site ao scroll
import ScrollAnimation from './modules/scrollAnimation.js';
// Importando a classe que anima elementos com um efeito dominó
import DominoAnimation from './modules/dominoAnimation.js';
// Importando a classe do scroll suave
import SmoothScroll from './modules/smoothScroll.js';

// Iniciando a classe MenuMobile
const menuMobile = new MenuMobile(
  '[data-mobile-toggle]',
  '[data-mobile-menu]',
  'active'
);
menuMobile.init();

// Iniciando a classe ScrollAnimation
const scrollAnimation = new ScrollAnimation(
  '[data-animate-scroll]',
  'animate-section'
);
scrollAnimation.init();

// Iniciando a classe DominoAnimation
const dominoAnimation = new DominoAnimation(
  '[data-animate-domino]',
  '[data-animate-domino-target]',
  'animate-section',
  'animate-domino'
);
dominoAnimation.init();

// Iniciando a classe SmoothScroll
const smoothScroll = new SmoothScroll(
  '[data-scroll-trigger]',
  '[data-mobile-toggle]',
  '[data-mobile-menu]',
  'active'
);
smoothScroll.init();

// Iniciando a classe de fetchAPI para o dropdown-menu
const fetchDropdown = new FetchAPI(
  '[data-append="dropdown"]',
  dropdownHTML,
  GET_CAMPEONATOS,
  'active',
  Dropdown,
  '[data-dropdown-toggle]',
  '[data-dropdown-menu]',
  'active'
);
fetchDropdown.init();

// Iniciando a classe de fetchAPI para as tabs da navegação
const fetchTab = new FetchAPI(
  '[data-append="tabNav"]',
  navTabHTML,
  GET_CAMPEONATOS,
  'active'
);
fetchTab.init();

// Iniciando a classe de fetchAPI para os campeonatos
const fetchCampeonato = new FetchAPI(
  '[data-append="campeonato"]',
  campCardHTML,
  GET_CAMPEONATOS,
  'active',
  TabNav,
  '[data-toggle-tab]',
  '[data-tab-content]',
  'active'
);
fetchCampeonato.init();

// Iniciando a classe de fetchAPI para o slide
const fetchSlide = new FetchAPI(
  '[data-append="slide"]',
  slideHTML,
  GET_PARTIDAS_AO_VIVO,
  'active',
  Slide,
  '[data-prev-slide]',
  '[data-next-slide]',
  '[data-slide-content]',
  '[data-slide]',
  'active'
);
fetchSlide.init();
