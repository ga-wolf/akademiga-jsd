const { useState } = require("react");

function ClickGame() {
  const [count, setCount] = useState(0);
  function onButtonClick() {
    setCount(count + 1);
  }
  return (
    <div>
      <h1>You have clicked {count} times</h1>
      <button onClick={onButtonClick}>Click Me</button>
    </div>
  );
}

module.exports = ClickGame;
