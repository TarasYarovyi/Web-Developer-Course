function showData(data) {
  console.log(data);
  return data;
}
function showError(err) {
  console.log(err);
}
function getJoke() {
  return fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => response.json())
    .then((data) => showData(data.value))
    .catch((err) => showError(err));
}

function getJoke2() {
  return new Promise((resolve, reject) => {
    let req = new XMLHttpRequest();
    req.open("GET", "https://api.chucknorris.io/jokes/random");

    req.onload = function () {
      if (req.status === 200) {
        resolve(JSON.parse(req.response).value);
      } else {
        reject(req.responseText);
      }
    };
    req.onerror = function () {
      reject(new Error("Network error"));
    };
    req.send();
  });
}

async function que() {
  try {
    console.log(1);
    await getJoke();
    await getJoke2().then((result) => console.log("Joke2: ", result));
    console.log(2);
  } catch (err) {
    console.log(err);
  }
}
que();
