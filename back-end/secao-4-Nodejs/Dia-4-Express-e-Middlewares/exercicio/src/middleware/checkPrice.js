const checkPrice = (req, res, next) => {
  const {price} = req.body;
  console.log('teste',price)

  if(price === undefined) return res.status(400).json({message: 'O campo price é obrigatório'});

  if(price < 0) return res.status(400).json({message: 'O campo price deve ser um número maior ou igual a zero'});

  next();
};

module.exports = checkPrice;
