const url = "https://swapi.dev/api/people/2/";

fetch(url)
  .then((response) => response.json())
  .then((result) => showData(result));
// or .then(showData);

function showData(data) {
  console.log(data);
}
