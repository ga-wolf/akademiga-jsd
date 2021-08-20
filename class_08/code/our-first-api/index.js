// Define our API Endpoint (we got this from the documentation)
// This answers: Where is the data stored?
let url = "http://api.open-notify.org/astros.json";

// These are the HTTP Options we provide to .fetch
// The method key needs to store an ALLCAPS string
// "GET" means I am asking for data
let httpOptions = {
  method: "GET",
};

function turnResponseIntoJSON(response) {
  // Wait for all of the data to be returned from the API
  // It's going to come in chunks at a time
  // And return a promise that represents when
  // all of the data has been downloaded and is ready to work with
  return response.json();
}

function handleData(data) {
  // Work with the data that has been returned!
  let div = document.querySelector("div");
  let numberOfPeople = data.number;
  div.innerHTML = `<h3>There are ${numberOfPeople} people in space</h3>`;
  data.people.forEach(function (person) {
    let name = person.name;
    let craft = person.craft;
    let newPara = document.createElement("p");
    newPara.innerHTML = `${name} is on ${craft}`;
    div.appendChild(newPara);
  });
}

// Make an AJAX request (meaning speak to the API)
fetch(url, httpOptions).then(turnResponseIntoJSON).then(handleData);
