// Importando os endpoints da API
import { GET_CAMPEONATOS } from './helpers/endpoints.js';

// Importando as funções de template HTML que serão gerados
import campCardHTML from './helpers/templateHTML/campCard.js';
import navTabHTML from './helpers/templateHTML/navTab.js';

// Importando a classe que realiza o fecth na API
import FetchAPI from './helpers/fetchAPI.js';

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

// Iniciando o objeto dropdown
const dropdown = new Dropdown(
  '[data-dropdown-toggle]',
  '[data-dropdown-menu]',
  'active'
);
dropdown.init();

// Iniciando o objeto Slide
const slide = new Slide(
  '[data-prev-slide]',
  '[data-next-slide]',
  '[data-slide-content]',
  '[data-slide]',
  'active'
);
slide.init();

// Iniciando o objeto MenuMobile
const menuMobile = new MenuMobile(
  '[data-mobile-toggle]',
  '[data-mobile-menu]',
  'active'
);
menuMobile.init();

// Iniciando o objeto ScrollAnimation
const scrollAnimation = new ScrollAnimation(
  '[data-animate-scroll]',
  'animate-section'
);
scrollAnimation.init();

// Iniciando o objeto DominoAnimation
const dominoAnimation = new DominoAnimation(
  '[data-animate-domino]',
  '[data-animate-domino-target]',
  'animate-section',
  'animate-domino'
);
dominoAnimation.init();

// Iniciando a classe de fetchAPI para as tabs da navegação
const fetchTab = new FetchAPI(
  '[data-append="tabNav"]',
  navTabHTML,
  GET_CAMPEONATOS
);
fetchTab.init();

// Iniciando a classe de fetchAPI para os campeonatos
const fetchCampeonato = new FetchAPI(
  '[data-append="campeonato"]',
  campCardHTML,
  GET_CAMPEONATOS,
  TabNav,
  '[data-toggle-tab]',
  '[data-tab-content]',
  'active'
);
fetchCampeonato.init();
