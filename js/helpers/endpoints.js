// Key para autorização na API
const apiKey = 'test_d6757ec2d3414c80aacddd7370e681';

// Endpoint dos campeonatos
export function GET_CAMPEONATOS() {
  return {
    url: 'https://api.api-futebol.com.br/v1/campeonatos',
    options: {
      method: 'GET',
      headers: {
        authorization: `Bearer ${apiKey}`,
      },
    },
  };
}

// Endpoint partidas ao vivo
export function GET_PARTIDAS_AO_VIVO() {
  return {
    url: 'https://api.api-futebol.com.br/v1/ao-vivo',
    options: {
      method: 'GET',
      headers: {
        authorization: `Bearer ${apiKey}`,
      },
    },
  };
}
