const { useState } = require("react");

function RandomNumber() {
  let [num, setNum] = useState(Math.random());
  function generateRandom() {
    setNum(Math.random()); // Update the state AND re-render the component
  }
  return (
    <div>
      <p>Your random number is {num}</p>
      <p onClick={generateRandom}>Click here for a new random number</p>
    </div>
  );
}

module.exports = RandomNumber;
