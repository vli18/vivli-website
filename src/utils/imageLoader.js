const imageModules = import.meta.glob('../portfolio-images/**', { eager: true, as: 'url' });

export const getImg = (p) => {
  if (!p) return '';
  const normalized = p
    .replace(/^\.?\/?src\/portfolio-images\/?/, '')
    .replace(/^\.?\/?portfolio-images\/?/, '');
  const key = `../portfolio-images/${normalized}`;
  return imageModules[key] || '';
};
