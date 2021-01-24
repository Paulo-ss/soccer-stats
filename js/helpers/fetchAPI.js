export default class FetchAPI {
  constructor(
    appendTarget,
    templateHTMLFunc,
    fetchConfig,
    classe,
    ...classeArgs
  ) {
    this.appendTarget = document.querySelector(appendTarget);
    this.templateHTMLFunc = templateHTMLFunc;
    this.fetchConfig = fetchConfig;

    // Propriedade com a classe que deverá ser criada e iniciada
    // somente após o fetch e o novo elemento ser criado e posicionado
    // no DOM para que a classe consiga pegá-lo
    this.classe = classe;
    // Argumentos que a classe a ser executada recebe
    this.classeArgs = classeArgs;

    // Estado de loading
    this.loading = false;
    // Elemento HTML de loading
    this.loadingElement = document.querySelector('[data-loading]');
  }

  // Método que cria um novo elemento com o conteúdo
  // retornado pela API
  createElement(data) {
    const newElement = document.createElement('div');

    newElement.innerHTML = this.templateHTMLFunc(data);

    return newElement;
  }

  // Método que lida com respostas do tipo Array
  handleArray(json) {
    json.forEach((i) => {
      this.appendTarget.append(this.createElement(i));
    });
  }

  // Método que verifica o tipo de dado retornado no fetch
  verifyData(json) {
    return Object.prototype.toString.call(json);
  }

  // Método que dependendo do tipo de dado retornado,
  // executa uma função ou outra
  typeofData(json) {
    const verifyObject = this.verifyData.bind(null);

    if (verifyObject(json) === '[object Array]') {
      this.handleArray(json);
    }
  }

  // Método que faz o fetch na url
  async fetchAPI() {
    const { url, options } = this.fetchConfig();

    this.loading = true;
    this.loadingElement.classList.add('active');

    const response = await fetch(url, options);
    const json = await response.json();

    this.loading = false;
    this.loadingElement.classList.remove('active');
    this.typeofData(json);

    // Declarando a classe passando seus argumentos e a iniciando
    if (this.classe) {
      const classe = new this.classe(...this.classeArgs);
      classe.init();
    }
  }

  // Método que inicia a classe
  init() {
    if (this.appendTarget && this.templateHTMLFunc && this.fetchConfig) {
      this.fetchAPI();
    }

    return this;
  }
}
