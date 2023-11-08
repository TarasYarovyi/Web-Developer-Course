const url = "https://v2.jokeapi.dev/joke/Any";

window.onload = function () {
  const div = document.createElement("div");
  document.querySelector("body").appendChild(div);
  function getJoke() {
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        if (result.hasOwnProperty("setup")) {
          div.textContent = result.setup;
          setTimeout(() => {
            div.textContent = result.delivery;
          }, 3000);
        } else div.textContent = result.joke;
      });
    // or .then(showData);

    function showData(data) {
      console.log(data);
    }
  }
  setInterval(getJoke, 5000);
};
