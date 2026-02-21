const getHelloMessage = (name) => {
  const who = name || 'World';
  return `Hello, ${who}!`;
};

const getItems = () => [
  { id: 1, name: 'Item A' },
  { id: 2, name: 'Item B' },
];

module.exports = {
  getHelloMessage,
  getItems,
};
