function Movie(props) {
  let { title } = props; // Destructuring Assignment
  return (
    <div>
      <p>{title}</p>
    </div>
  );
}

module.exports = Movie;
