const healthService = require('../services/healthService');

const getHealth = (req, res) => {
  const data = healthService.getStatus();
  res.json(data);
};

module.exports = {
  getHealth,
};
