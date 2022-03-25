export async function addComment(itemId,username,comment) {
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/t9up9m5T6uECqwieuC71/comments';
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      "item_id": itemId,
      "username": username,
      "comment": comment  
      }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      'Accept': 'application/json'
    },
  })
}

export async function getComment(idItem) {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/t9up9m5T6uECqwieuC71/comments?item_id=${idItem}`
  let data = await fetch(url);
  const res = await data.json();
  return res;
}