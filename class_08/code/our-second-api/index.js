function search(title) {
  // Set up the API endpoint (came from the documentation)
  let url = `http://www.omdbapi.com/`;
  // Added query string parameters (came from the documentation)
  let queryString = `?apikey=88e15bed&t=${title}`;

  // Created our HTTP Options
  // Specified that we were asking for data (a GET request)
  let httpOptions = {
    method: "GET",
  };

  // Data takes a while to come back...
  // So wait until the data has come back
  // Convert it from JSON into a JS Object
  // Return a promise, so that we can handle the data (by using another .then)
  function waitForData(response) {
    return response.json();
  }

  // Receive the information that was returned from the API
  // Call it `data` in the processData function
  function processData(data) {
    // Data is a big JS object
    // It looks like: http://www.omdbapi.com/?apikey=88e15bed&t=Jaws
    // Access keys in the data that was returned for things that we want to display
    console.table(data);
    let title = data.Title;
    let plot = data.Plot;
    let poster = data.Poster;
    let year = data.Year;
    // Add it to the page (by turning into HTML)
    let div = document.querySelector("div");
    div.innerHTML = `
    <img src="${poster}">
    <h2>${title}</h2>
    <h3>Year: ${year}</h3>
    <p>${plot}</p>
  `;
  }

  // Fetch requires two parameters
  // The first is a URL (add the URL and the query string)
  // The second is an object containing HTTP options
  fetch(url + queryString, httpOptions)
    .then(waitForData) // Wait until all data has been received
    .then(processData); // Show the data on the page
}

// Select the form using a DOM Access Method
let form = document.querySelector("form");

// When the form is submitted, run this...
function handleSubmit(event) {
  event.preventDefault();
  // By default, when forms are submitted they refresh the page
  // Stop that from happening using .preventDefault
  // (if the page refreshes, JS stops)
  let input = document.querySelector("input");
  // Get the text that the user typed in the input
  let title = input.value;
  // Set some text saying "Loading..."
  let div = document.querySelector("div");
  div.innerHTML = "Loading...";
  // Search for whatever the user typed
  search(title);
}

// Add the event listener by binding a target DOM node, an event type and a callback
form.addEventListener("submit", handleSubmit);
