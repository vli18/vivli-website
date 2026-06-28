const imageModules = import.meta.glob('../assets/**', { eager: true, as: 'url' });

export const getImg = (p) => {
  if (!p) return '';
  const normalized = p
    .replace(/^\.?\/?src\/assets\/?/, '')
    .replace(/^\.?\/?assets\/?/, '');
  const key = `../assets/${normalized}`;
  return imageModules[key] || '';
};
