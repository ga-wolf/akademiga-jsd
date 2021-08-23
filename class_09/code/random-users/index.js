// Focus on functionality first

// When dealing with APIs:
// - What is our endpoint?
let url = `https://randomuser.me/api/`;

// - What parameters do we need to provide?
let params = `?results=100`;

// - What method are we using?
let httpOptions = {
  method: "GET",
};

let endpoint = url + params;

function waitForData(response) {
  return response.json();
}

function displayData(data) {
  let results = data.results;
  let ul = document.querySelector("ul");
  results.forEach(function (person) {
    let name = person.name;
    let phone = person.phone;
    let email = person.email;
    let fullName = `${name.title} ${name.first} ${name.last}`;
    let li = document.createElement("li");
    li.innerHTML = `
      ${fullName} - ${phone} - ${email}
    `;
    ul.appendChild(li);
  });
}

let button = document.querySelector("button");
button.addEventListener("click", function () {
  let ul = document.querySelector("ul");
  ul.innerHTML = "";
  fetch(endpoint, httpOptions).then(waitForData).then(displayData);
});
