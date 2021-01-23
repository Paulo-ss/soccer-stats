// Importando a classe do Dropdown
import Dropdown from './modules/dropdown.js';
// Importando a classe da navegação por tabs
import TabNav from './modules/tabNav.js';
// Importando a classe do slide
import Slide from './modules/slide.js';
// Importando a classe do menuMobile
import MenuMobile from './modules/menuMobile.js';

// Iniciando o objeto dropdown
const dropdown = new Dropdown(
  '[data-dropdown-toggle]',
  '[data-dropdown-menu]',
  'active'
);
dropdown.init();

// Iniciando o objeto TabNav
const tabNav = new TabNav('[data-toggle-tab]', '[data-tab-content]', 'active');
tabNav.init();

// Iniciando o objeto Slide
const slide = new Slide(
  '[data-prev-slide]',
  '[data-next-slide]',
  '[data-slide-content]',
  '[data-slide]',
  'active'
);
slide.init();

// Iniciando o objeto menuMobile
const menuMobile = new MenuMobile(
  '[data-mobile-toggle]',
  '[data-mobile-menu]',
  'active'
);
menuMobile.init();
