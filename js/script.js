// Importando a classe de dropdown
import Dropdown from './modules/dropdown.js';

// Criando o objeto dropdown
const dropdown = new Dropdown(
  '[data-dropdown-toggle]',
  '[data-dropdown-menu]',
  'active'
);
dropdown.init();
