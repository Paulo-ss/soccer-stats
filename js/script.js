// Importando a classe do Dropdown
import Dropdown from './modules/dropdown.js';
// Importando a classe da navegação por tabs
import TabNav from './modules/tabNav.js';

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
