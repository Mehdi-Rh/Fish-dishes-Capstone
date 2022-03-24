

export async function getLikes(urlLike) {
  let data = await fetch(urlLike);
  return  data.json();
}

export async function postLikes(urlLike, idItem) {
  await fetch(urlLike, {
    method: 'POST',
    body: JSON.stringify({
      "item_id": idItem
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      'Accept': 'application/json'
    },
  })
    .then((data) => {console.log(data)});
}

export function addLikes(urlLike) {
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-heart')) {
      const id = e.target.parentElement.id;
      postLikes(urlLike, id);
      setTimeout(() => {
      const likeNumber =  getLikes(urlLike)
      .then(response => {   
          let likeNumb = response.find( ({item_id}) => item_id === id) 
          likeNumb = (!!likeNumb ?  likeNumb.likes : 0)
          console.log("likeNumber")
          console.log(likeNumber)
          const likeContainer = e.target.parentElement.parentElement
          const like = likeContainer.children[1]
          like.innerHTML = `${likeNumb} Likes`
          e.target.style.color ="red";
      }) 
    },1000)
   
    }
    }
  )
}









