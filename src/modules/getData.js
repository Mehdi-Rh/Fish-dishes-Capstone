// getData function extract data from themealdb API
// NB: always call this function using the await keyword and in a // async function
export default async function getData(url) {
  let data = await fetch(url);
  data = await data.json();
  return data.meals;
}
