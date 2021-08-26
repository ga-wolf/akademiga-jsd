const { useState } = require("react");

function MovieSearch() {
  const [title, setTitle] = useState("");
  const [data, setData] = useState(null);

  let dataMarkup = "There is no data to show";
  if (data !== null) {
    dataMarkup = JSON.stringify(data);
  }

  function updateTitle(event) {
    setTitle(event.target.value);
  }

  function search(event) {
    event.preventDefault();
    let url = `http://www.omdbapi.com/`;
    let queryString = `?apikey=88e15bed&t=${title}`;
    fetch(url + queryString, { method: "GET" })
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        setData(data); // Update the state, force a re-render
      });
  }
  return (
    <div>
      <form onSubmit={search}>
        <input
          type="text"
          placeholder="Movie Title"
          value={title}
          onChange={updateTitle}
        />
        <input type="submit" value="Search" />
      </form>
      <p>{dataMarkup}</p>
    </div>
  );
}

module.exports = MovieSearch;
