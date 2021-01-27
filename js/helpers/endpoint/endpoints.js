// Key para autorização na API
const apiKey = 'test_d6757ec2d3414c80aacddd7370e681';

// Endpoint dos campeonatos
export function GET_CAMPEONATOS() {
  return () => ({
    url: 'https://api.api-futebol.com.br/v1/campeonatos',
    options: {
      method: 'GET',
      headers: {
        authorization: `Bearer ${apiKey}`,
      },
    },
  });
}

// Endpoint de um campeonato específico
export function GET_CAMPEONATO() {
  return (campeonatoID) => ({
    url: `https://api.api-futebol.com.br/v1/campeonatos/${campeonatoID}`,
    options: {
      method: 'GET',
      headers: {
        authorization: `Bearer ${apiKey}`,
      },
    },
  });
}

// Endpoint partidas ao vivo
export function GET_PARTIDAS_AO_VIVO() {
  return () => ({
    url: 'https://api.api-futebol.com.br/v1/ao-vivo',
    options: {
      method: 'GET',
      headers: {
        authorization: `Bearer ${apiKey}`,
      },
    },
  });
}

// Endpoint partidas de um campeonato específico
export function GET_PARTIDAS_CAMP() {
  return (campeonatoID) => ({
    url: `https://api.api-futebol.com.br/v1/campeonatos/${campeonatoID}/partidas`,
    options: {
      method: 'GET',
      headers: {
        authorization: `Bearer ${apiKey}`,
      },
    },
  });
}

// Endpoint das fases de um campeonato específico
export function GET_CAMP_FASES() {
  return (campeonatoID) => ({
    url: `https://api.api-futebol.com.br/v1/campeonatos/${campeonatoID}/fases`,
    options: {
      method: 'GET',
      headers: {
        authorization: `Bearer ${apiKey}`,
      },
    },
  });
}

// Endpoint dos dados de uma fase específica
export function GET_CAMP_FASE(faseId) {
  return (campeonatoID) => ({
    url: `https://api.api-futebol.com.br/v1/campeonatos/${campeonatoID}/fases/${faseId}`,
    options: {
      method: 'GET',
      headers: {
        authorization: `Bearer ${apiKey}`,
      },
    },
  });
}
