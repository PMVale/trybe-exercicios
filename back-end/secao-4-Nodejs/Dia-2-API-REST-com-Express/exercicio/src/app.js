const fs = require('fs').promises;
const path = require('path');

const express = require('express');

const app = express();

app.use(express.json());

const moviesPath = path.resolve(__dirname, './movies.json');

const readMovies = async () => {
  try {
    const data = await fs.readFile(moviesPath);
    const movies = JSON.parse(data);
    return movies;
  } catch (error) {
    console.error(`Arquivo não pode ser lido: ${error}}`);
  }
};

app.get('/', (req, res) => res.status(200).json({ message: 'Welcome' }));

app.get('/movies', async (req, res) => {
  const movies = await readMovies();
  res.status(200).json(movies);
});

app.get('/movies/search', async (req, res) => {
  const movies = await readMovies();
  const query = req.query.q;
  const searchMovie = movies
  .filter((item) => item.movie.toLowerCase().includes(query.toLowerCase()));
  res.status(200).json(searchMovie);
});

app.get('/movies/:id', async (req, res) => {
  const movies = await readMovies();
  const { id } = req.params;
  const searchMovie = movies.find((movie) => movie.id === Number(id));
  res.status(200).json(searchMovie);
});

app.post('/movies', async (req, res) => {
  const movies = await readMovies();
  const newMovie = { id: movies.length + 1, ...req.body };
  movies.push(newMovie);
  await fs.writeFile(moviesPath, JSON.stringify(movies));
  res.status(201).json({ movie: newMovie });
});

app.put('/movies/:id', async (req, res) => {
  const movies = await readMovies();
  const { id } = req.params;
  const editData = { ...req.body };
  const editIndex = movies.findIndex((movie) => movie.id === Number(id));
  if (!editIndex) {
    res.status(404).json({ message: 'Movie not found' });
  }
  movies[editIndex].movie = editData.movie;
  movies[editIndex].price = editData.price;
  await fs.writeFile(moviesPath, JSON.stringify(movies));
  res.status(200).json(movies[editIndex]);
});

app.delete('/movies/:id', async (req, res) => {
  const movies = await readMovies();
  const { id } = req.params;
  const deleteIndex = movies.findIndex((movie) => movie.id === Number(id));
  if (!deleteIndex) {
    res.status(404).json({ message: 'Movie not found' });
  }
  movies.splice(deleteIndex, 1);
  await fs.writeFile(moviesPath, JSON.stringify(movies));
  res.status(200).end();
});

module.exports = app;