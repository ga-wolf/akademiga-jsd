const React = require("react");

function ClickCounter() {
  const [count, setCount] = React.useState(0);
  function increment() {
    setCount(count + 1); // Update count and re-render the component
  }
  function decrement() {
    setCount(count - 1);
  }
  // Make decrement work! It should subtract one from count
  return (
    <div>
      <p>You have clicked {count} times</p>
      <button onClick={increment}>Click here to increment</button>
      <button onClick={decrement}>Decrement the number of clicks</button>
    </div>
  );
}

module.exports = ClickCounter;
