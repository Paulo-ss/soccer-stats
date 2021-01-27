// Importando os endpoints da API
import {
  GET_CAMPEONATOS,
  GET_PARTIDAS_AO_VIVO,
  GET_CAMPEONATO,
  GET_CAMP_FASES,
} from './helpers/endpoint/endpoints.js';

// Importando as funções de template HTML que serão gerados
import campCardHTML from './helpers/templateHTML/campCard.js';
import navTabHTML from './helpers/templateHTML/navTab.js';
import dropdownHTML from './helpers/templateHTML/dropdown.js';
import slideHTML from './helpers/templateHTML/slideHTML.js';
import campDescHTML from './helpers/templateHTML/campDescHTML.js';
import campFasesHTML from './helpers/templateHTML/campFasesHTML.js';

// Importando a classe que realiza o fecth na API
import FetchAPI from './helpers/fetch/fetchAPI.js';

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
// Importando a classe do scroll pro topo
import ScrollTop from './modules/scrollTop.js';
// Importando a classe que faz o fetch de uma fase específica
import FetchFase from './modules/fetchFase.js';

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

// Iniciando a classe do botão para dar scroll pro topo da página
const scrollTop = new ScrollTop('[data-scroll-top]', 'active');
scrollTop.init();

// Iniciando a classe de fetchAPI para o dropdown-menu
const fetchDropdown = new FetchAPI(
  '[data-append="dropdown"]',
  dropdownHTML,
  GET_CAMPEONATOS(),
  false,
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
  GET_CAMPEONATOS(),
  false,
  'active'
);
fetchTab.init();

// Iniciando a classe de fetchAPI para os campeonatos
const fetchCampeonato = new FetchAPI(
  '[data-append="campeonato"]',
  campCardHTML,
  GET_CAMPEONATOS(),
  false,
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
  GET_PARTIDAS_AO_VIVO(),
  false,
  'active',
  Slide,
  '[data-prev-slide]',
  '[data-next-slide]',
  '[data-slide-content]',
  '[data-slide]',
  'active'
);
fetchSlide.init();

// Iniciando a classe de fetchAPI para pegar as informações
// do campeonato específico na página de campeonato
const fetchCamp = new FetchAPI(
  '[data-append="campeonato-desc"]',
  campDescHTML,
  GET_CAMPEONATO(),
  true,
  'active'
);
fetchCamp.init();

// Iniciando a classe de fetchAPI para pegar as fases do campeonato
const fetchFases = new FetchAPI(
  '[data-append="camp-fases"]',
  campFasesHTML,
  GET_CAMP_FASES(),
  true,
  'active',
  FetchFase,
  '[data-fetch-fase]',
  '[data-append="camp-fase"]',
  'active'
);
fetchFases.init();
