/* eslint-disable operator-linebreak */
// Importando a função que pega os parâmetros da URL da página
import getURLParams from '../getUrlParams/getUrlParams.js';

export default class FetchAPI {
  constructor(
    appendTarget,
    templateHTMLFunc,
    fetchConfig,
    fetchConfigParams,
    active,
    classe,
    ...classeArgs
  ) {
    // Elemento no DOM que receberá o novo elemento criado
    this.appendTarget = document.querySelector(appendTarget);
    // Função com o HTML em template string do elemento criado
    this.templateHTMLFunc = templateHTMLFunc;
    // Função do endpoint.js que retorna um objeto com a url e
    // as options para o fetch
    this.fetchConfig = fetchConfig;
    // Valor boolean que indica se a função de fetchConfig recebe
    // um parâmetro da URL como agr ou não
    this.fetchConfigParams = fetchConfigParams;

    // Propriedade com a classe que deverá ser criada e iniciada
    // somente após o fetch e o novo elemento ser criado e posicionado
    // no DOM para que a classe consiga pegá-lo
    this.Classe = classe;
    // Argumentos que a classe a ser executada recebe
    this.classeArgs = classeArgs;

    // Estado de loading
    this.loading = false;
    // Elemento HTML de loading
    this.loadingElement = document.querySelector('[data-loading]');
    // Classe CSS de active para mostrar o elemento de loading
    this.active = active;
  }

  // Método que cria a div de erro e a posiciona
  // no appendTarget com a mensagem de erro
  crateErrorElement(errorMessage) {
    const errorDiv = document.createElement('div');

    errorDiv.classList.add('error');
    errorDiv.innerText = errorMessage;

    this.appendTarget.append(errorDiv);
  }

  // Método que cria um novo elemento com o conteúdo
  // retornado pela API
  createElement(data) {
    const newElement = document.createElement('div');

    newElement.innerHTML = this.templateHTMLFunc(data);

    this.appendTarget.append(newElement);
  }

  // Método que lida com respostas do tipo Array
  handleArray(json) {
    json.forEach((i) => {
      this.createElement(i);
    });
  }

  // Método que verifica o tipo de dado retornado no fetch
  // eslint-disable-next-line class-methods-use-this
  verifyData(json) {
    return Object.prototype.toString.call(json);
  }

  // Método que ativa o método de verificação de dado. Caso
  // seja uma array, executa o handleArray() que executa o
  // createElement(), caso seja um objeto, executa direto
  // o createElement()
  typeofData(json) {
    const verifyObject = this.verifyData.bind(null);

    if (verifyObject(json) === '[object Array]') {
      this.handleArray(json);
    } else {
      this.createElement(json);
    }
  }

  // Método que verifica se o fetchConfig recebe algum parâmetro
  // ou não, e retorna a url e options para o fetch
  getFetchOptions() {
    const params = getURLParams();

    if (this.fetchConfigParams) {
      const { url, options } = this.fetchConfig(params);

      return { url, options };
      // eslint-disable-next-line no-else-return
    } else {
      const { url, options } = this.fetchConfig();

      return { url, options };
    }
  }

  // Método que define o loading para true/false
  setLoading(state) {
    this.loading = state;

    if (state) {
      this.loadingElement.classList.add(this.active);
      document.body.style.overflow = 'hidden';
    } else {
      this.loadingElement.classList.remove(this.active);
      document.body.style.overflow = 'auto';
    }
  }

  // Método que faz o fetch na url
  async fetchAPI() {
    try {
      // Pegando a url e as opções do fetch a partir da função
      // de congifuração (endpoints.js) que foi passada
      const { url, options } = this.getFetchOptions();

      // Setando o loading para true
      this.setLoading(true);

      // Pegando a resposta do fetch e convertendo para JSON
      const response = await fetch(url, options);
      const json = await response.json();

      // Só inicia a classe e cria os elementos se a resposta
      // da requisição no fetch for true
      if (response.ok) {
        // Verificando o tipo de dado retornado (array ou objeto),
        // e a partir disso executa as demais funções da classe
        this.typeofData(json);

        // Caso alguma classe tenha sido fornecida como argumento,
        // a mesma é iniciada com os seus argumentos fornecidos
        if (this.Classe) {
          const classe = new this.Classe(...this.classeArgs);
          classe.init();
        }

        // Setando o loading para false
        this.setLoading(false);
      } else {
        throw new Error(json.message);
      }
    } catch (err) {
      // Setando o loading para false
      this.setLoading(false);

      // Executando o método que cria o elemento HTML de erro
      this.crateErrorElement(err.message);
    }
  }

  // Método que inicia a classe
  init() {
    if (
      this.appendTarget &&
      this.templateHTMLFunc &&
      this.fetchConfig &&
      this.active
    ) {
      this.fetchAPI();
    }

    return this;
  }
}
