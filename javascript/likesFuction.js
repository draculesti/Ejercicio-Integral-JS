const likeBtnElement = document.getElementById('likeBtn');
const displayCounter = document.getElementById('likeCounter');

const initialState = Number(displayCounter.innerText);

let counter = initialState;

export const handlerLikes = () => {
  likeBtnElement.addEventListener('click', () => {
    counter++;
    displayCounter.innerText = counter;
  });
};