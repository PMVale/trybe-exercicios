import './style.css';
import Swal from 'sweetalert2';

const heroImage = document.getElementById('hero-image');

const heroName = document.getElementById('hero-name');

const button = document.querySelector('button');

const getData = () => {
  button.addEventListener('click', () => {
    fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json')
      .then((response) => response.json())
      .then ((data) => {
        const randomData = data[Math.floor(Math.random() * data.length -1)];
        console.log(randomData);
        heroName.innerText = randomData.name;
        const images = randomData.images;
        console.log(images);
        heroImage.src = images.md;
      })
      .catch((error) => {
        Swal.fire({
          title: 'Error!',
          text: `${error.message}`,
          icon: 'error',
          confirmButtonText: 'OK'
        });
      });
  });
};

getData();