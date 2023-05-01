'use strict'

const input = document.querySelector('input');
const span = document.querySelector('span');
const div = document.querySelector('.client-post');
const url = 'https://jsonplaceholder.typicode.com/';

input.addEventListener('blur', getId);

async function getId() {
  let id = input.value;
  span.innerHTML = '';
  if (!(id > 0 && id < 101)) {
    span.textContent = 'Помилка, введіть id від 1 до 100';
    div.innerHTML = '';
  } else {
      try {
        return await addPost(id);
      } catch(error) {
        console.error(error);
      }
    }
}

async function addPost(id) {
  try {
    const response = await fetch(url + 'posts/' + id);
    const data = await response.json();
          div.innerHTML = `<h3 class='post__title card-body'>${data.title}</h3>
                            <p class='post__text card-title'>${data.body}</p>
                            <button class='btn btn-primary' type='submit'>Показати коментарі</button>`;
          const button = document.querySelector('button');
          button.onclick = () => addComments(id);
        } catch(error) {
          console.error(error);
        }
  };

async function addComments(id) {
  try {
    const response = await fetch(url + 'comments/' + id);
    const data =  await response.json();
      div.innerHTML += `<p class='comments__title'>${data.name}</p>
                        <p class='comments__mail'>${data.email}</p>
                        <p class='comments__text'>${data.body}</p>`
  } catch(error) {
    console.error(error);
  };
};
