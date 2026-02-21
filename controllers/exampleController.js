const exampleService = require('../services/exampleService');

const getHello = (req, res) => {
  const message = exampleService.getHelloMessage(req.query.name);
  res.json({ message });
};

const getItems = (req, res) => {
  const items = exampleService.getItems();
  res.json({ items });
};

module.exports = {
  getHello,
  getItems,
};
