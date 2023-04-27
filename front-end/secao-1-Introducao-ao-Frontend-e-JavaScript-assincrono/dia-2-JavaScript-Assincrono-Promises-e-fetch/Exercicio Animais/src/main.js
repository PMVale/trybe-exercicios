import './style.css';

const btnDog = document.querySelector('.btn-dog');

const btnCat = document.querySelector('.btn-cat');

const btnRandom = document.querySelector('.btn-random');

const image = document.querySelector('img');

const dogData = () => {
  btnDog.addEventListener('click', () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        image.src = `${data.message}`;
      });
  });
};

const catData = () => {
  btnCat.addEventListener('click', () => {
    fetch('https://aws.random.cat/meow')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        image.src = `${data.file}`;
      });
  });
};

const randomData = () => {
  btnRandom.addEventListener('click', () => {
    Promise.race([fetch('https://dog.ceo/api/breeds/image/random'), fetch('https://aws.random.cat/meow')])
      .then((response) => response.json())
      .then((data) => {
        if (typeof data.message === 'string') {
          image.src = `${data.message}`;
        } else {
          image.src = `${data.file}`;
        }
      });
  });
};

dogData();

catData();

randomData();