const { Link } = require("react-router-dom");

function Nav({ title }) {
  return (
    <header>
      <h1>{title}</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/hello/shafiq">Hello Shafiq</Link>
        <Link to="/hello/nadiah">Hello Nadiah</Link>
        <Link to="/hello/nurain">Hello Nurain</Link>
        <Link to="/hello/wong">Hello Wong</Link>
        <Link to="/add/5/7">5 + 7</Link>
      </nav>
    </header>
  );
}

module.exports = Nav;
