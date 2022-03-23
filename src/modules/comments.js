export async function addComment(urlComment, itemId,username,comment) {
  await fetch(urlComment, {
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

export async function getComment(urlComment,item1) {
  urlComment += `?item_id=${item1}`
  let data = await fetch(urlComment);
  return await data.json();
}