const express = require('express');

const app = express();

app.use(express.json());

module.exports = app;

const {readChocolates, editChocolate} = require('./fsUtils');

app.get('/chocolates', async (req, res) => {
  const chocolates = await readChocolates();
  res.status(200).json(chocolates);
});

app.get('/chocolates/total', async (req, res) => {
  const chocolates = await readChocolates();
  res.status(200).json({"totalChocolates": chocolates.chocolates.length})
});

app.get('/chocolates/search', async (req, res) => {
  const chocolates = await readChocolates();
  const query = req.query.name.toLowerCase();
  const result = chocolates.chocolates.filter((chocolate) => chocolate.name.toLowerCase().includes(query));
  if (result.length === 0) {
    res.status(404).json({"chocolates": result});
  }
  res.status(200).json({"chocolates": result});
})

app.get('/chocolates/:id', async (req, res) => {
  const chocolates = await readChocolates();
  const {id} = req.params;
  const chocolate = chocolates.chocolates.find((chocolate) => chocolate.id === Number(id));
  if(!chocolate) return res.status(404).json({"message":"Chocolate not found"});
  res.status(200).json({"chocolate":chocolate});
});

app.get('/chocolates/brand/:brandId', async (req, res) => {
  const chocolates = await readChocolates();
  const {brandId} = req.params;
  const brand = chocolates.chocolates.filter((chocolate) => chocolate.brandId === Number(brandId));
  res.status(200).json({"chocolates":brand});
});

app.put('/chocolates/:id', async (req, res) => {
  const chocolates = await readChocolates();
  const {id} = req.params;
  const body = req.body;
  const index = chocolates.chocolates.findIndex((chocolate) => chocolate.id === Number(id));
  if (!chocolates.chocolates[index]) {
    res.status(404).json({"message": "chocolate not found"});
    return;
  }
  chocolates.chocolates[index].name = body.name;
  chocolates.chocolates[index].brandId = body.brandId;
  await editChocolate(chocolates);
  res.status(200).json(body);
})