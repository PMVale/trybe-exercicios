// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

afterEach(() => jest.clearAllMocks());

// it('fetches a joke', async () => {
//   const joke = {
//     id: '7h3oGtrOfxc',
//     joke: 'Whiteboards ... are remarkable.',
//     status: 200,
//   };

//   jest.spyOn(global, 'fetch');
//   global.fetch.mockResolvedValue({
//     json: jest.fn().mockResolvedValue(joke),
//   });

//   render(<App />);
//   const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
//   expect(renderedJoke).toBeInTheDocument();
//   expect(global.fetch).toHaveBeenCalledTimes(1);
//   expect(global.fetch).toHaveBeenCalledWith(
//     'https://icanhazdadjoke.com/',
//     { headers: { Accept: 'application/json' } },
//   );
// });
it('fetches a joke', async () => {
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  // Outra forma de mock do fetch:
  global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(joke),
  }));

  render(<App />);
  const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
  expect(renderedJoke).toBeInTheDocument();
  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(global.fetch).toHaveBeenCalledWith('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json' } });
});

test('Verifica se o botão New Joke funciona da forma esperada', async () => {
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  const newJoke = {
    id: "haahVKZDtrc",
    joke: "What's red and bad for your teeth? A Brick.",
    status: 200
  };

  jest.spyOn(global, 'fetch').mockResolvedValue({
    json: async () => (joke)
  })

  render(<App />);
  
  const jokeMessage = await screen.findByText('Whiteboards ... are remarkable.')
  
  expect(jokeMessage).toBeInTheDocument();

  const newJokeBtn = screen.getByRole('button', {
    name: 'New Joke',
  })

  jest.spyOn(global, 'fetch').mockResolvedValue({
    json: async () => (newJoke)
  })
  userEvent.click(newJokeBtn);

  const newJokeMessage = await screen.findByText("What's red and bad for your teeth? A Brick.");

  expect(newJokeMessage).toBeInTheDocument();
  
  expect(screen.queryByText(joke.joke)).not.toBeInTheDocument();

  expect(global.fetch).toHaveBeenCalledTimes(2);

});