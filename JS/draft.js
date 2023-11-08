const url = "https://v2.jokeapi.dev/joke/Any";

fetch(url)
  .then((response) => response.json())
  .then((result) => {
    if (result.hasOwnProperty("setup")) {
      console.log(result.setup);
      setTimeout(() => {
        console.log(result.delivery);
      }, 3000);
    }
  });
// or .then(showData);

function showData(data) {
  console.log(data);
}
