const Nav = require("./nav");
const Footer = require("./footer");
const Student = require("./student");
const Movie = require("./movie");
const Events = require("./events");
const ClickGame = require("./clickGame");

function App() {
  let students = ["Aliff", "Aqilah", "Iskandar", "Luqman", "Zahed"];
  let studentsMarkup = students.map(function (student) {
    return <Student name={student} />;
  });
  let movies = [
    "Blue Planet", // -> <Movie title="Blue Planet" />
    "Planet Earth", // -> <Movie title="Planet Earth" />
    "Blue Planet 2",
    "Our Planet",
    "Frozen Planet",
  ]; // Pretend all of this data came from an API
  let moviesMarkup = movies.map(function (title) {
    return <Movie title={title} />;
  });
  return (
    <div>
      <Nav />
      <ClickGame />
      <div>
        <h2>Events</h2>
        <Events />
      </div>
      <div>
        <h2>Movie List</h2>
        {moviesMarkup}
      </div>
      <div>
        <h2>Student List</h2>
        {studentsMarkup}
      </div>
      <Footer />
    </div>
  );
}

module.exports = App;
