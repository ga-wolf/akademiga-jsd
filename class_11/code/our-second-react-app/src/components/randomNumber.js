function RandomNumber() {
  let num = Math.random();
  return (
    <div>
      <h2>Random Number: {num}</h2>
    </div>
  );
}

module.exports = RandomNumber;
