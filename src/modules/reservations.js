export async function addReservation(itemId, username, date_start, date_end) {
  const urlReservation = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/t9up9m5T6uECqwieuC71/reservations';
  await fetch(urlReservation, {
    method: 'POST',
    body: JSON.stringify({
      "item_id": itemId,
      "username": username,
      "date_start": date_start,
      "date_end": date_end      
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      'Accept': 'application/json'
    },
  })
}

export async function getReservation(itemId) {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/t9up9m5T6uECqwieuC71/reservations?item_id=${itemId}`
  let data = await fetch(url);
   const response = await data.json();
   return response;
}
