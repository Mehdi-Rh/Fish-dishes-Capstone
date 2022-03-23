export async function addLikes(urlLike, itemId) {
  await fetch(urlLike, {
    method: 'POST',
    body: JSON.stringify({
      "item_id": itemId
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      'Accept': 'application/json'
    },
  })
    .then((data) => {console.log(data)});
}

export async function getLikes(urlLike) {
  let data = await fetch(urlLike);
  return await data.json();
}

