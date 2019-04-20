export const tempItems = () => {
  const items = [];

  for (let i = 1; i <= 51; i++) {
    const modulo = parseInt(Date.now() % i) || 1;
    const id = parseInt((Date.now() - parseInt((Date.now() / i))) / modulo + i);
    items.push({ id, title: `${i} Title` });
  }

  return items;
};
