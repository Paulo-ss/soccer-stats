// Key para autorização na API
export const apiKey = 'test_d6757ec2d3414c80aacddd7370e681';

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
