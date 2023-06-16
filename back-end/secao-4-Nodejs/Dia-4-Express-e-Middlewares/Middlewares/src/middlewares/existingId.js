const teams = require('../utils/teams');

const existingId = (req, res, next) => {
  const id = Number(req.params.id);
  const checkId = teams.some((team) => team.id === id);
  if(!checkId) return res.status(404).json({message: 'Time não encontrado'});
  next();
};

module.exports = existingId;