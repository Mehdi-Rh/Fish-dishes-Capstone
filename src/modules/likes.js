export async function getLikes(urlLike) {
  const data = await fetch(urlLike);
  return data.json();
}

export async function postLikes(urlLike, idItem) {
  await fetch(urlLike, {
    method: 'POST',
    body: JSON.stringify({
      item_id: idItem,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      Accept: 'application/json',
    },
  });
}

export function addLikes(urlLike) {
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-heart')) {
      const { id } = e.target.parentElement;
      postLikes(urlLike, id);
      setTimeout(() => {
        getLikes(urlLike)
          .then((response) => {
            let likeNumb = response.find((x) => x.item_id === id);
            likeNumb = (likeNumb ? likeNumb.likes : 0);
            const likeContainer = e.target.parentElement.parentElement;
            const like = likeContainer.children[1];
            like.innerHTML = `${likeNumb} Likes`;
            e.target.style.color = 'red';
          });
      }, 1000);
    }
  });
}
