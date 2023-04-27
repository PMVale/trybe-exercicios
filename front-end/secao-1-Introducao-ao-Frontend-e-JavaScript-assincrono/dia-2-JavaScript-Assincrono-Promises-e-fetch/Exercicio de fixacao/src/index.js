import './style.css';

import {
  fillUsersSelect,
  fillPosts,
  fillFeaturedPostComments,
  clearPageData,
  fillErrorMessage,
} from '../utils/updateUI';

const usersSelect = document.querySelector('#users-select');

const USERS_API = 'https://dummyjson.com/users';
// faça a lógica para pegar as informações das pessoas usuárias e preencher o select aqui.
const fetchUsersSelect = () => {
  fetch(USERS_API)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      fillUsersSelect(response.users);
    });
};

fetchUsersSelect();

usersSelect.addEventListener('change', () => {
  clearPageData();
  
  fetch(`https://dummyjson.com/posts/user/${usersSelect.value}`)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      const posts = response.posts;
      fillPosts(posts);
      const [featuredPost] = posts;
      const comments_API = `https://dummyjson.com/posts/${featuredPost.id}/comments`;
      return fetch(comments_API);
    })
    .then((response) => response.json())
    .then((response) => {
      fillFeaturedPostComments(response.comments);
    })
    .catch((error) => {
      fillErrorMessage('Erro ao recuperar informações');
      console.log(error.message);
    });
});
