// Função que busca os parâmetros na URL
export default function getURLParams() {
  const searchParams = new URLSearchParams(window.location.search);
  const id = searchParams.get('id');

  return id;
}
