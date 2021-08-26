function Nav(props) {
  let { title, navLinks } = props; // Destructuring Assignment
  let links = navLinks.map(function (text) {
    return <a href="/">{text}</a>;
  });
  return (
    <nav>
      <h2>{title}</h2>
      {links}
      <hr />
    </nav>
  );
}

module.exports = Nav;
