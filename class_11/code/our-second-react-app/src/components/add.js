function Add(props) {
  let { a, b } = props; // Destructuring Assignment
  return (
    <div>
      <h2>
        {a} + {b} = {a + b}
      </h2>
    </div>
  );
}

module.exports = Add;
