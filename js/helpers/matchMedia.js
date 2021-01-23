// Função helper para o responsivo
export default function media(media) {
  const matchMedia = window.matchMedia(media).matches;

  return matchMedia;
}
