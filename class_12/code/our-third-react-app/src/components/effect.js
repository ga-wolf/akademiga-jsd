const { useEffect, useState } = require("react");

function Effect() {
  const [count, setCount] = useState(0);
  let [time, setTime] = useState(0);
  useEffect(function () {
    console.log("This will only ever run once");
  }, []);
  useEffect(function () {
    console.log("The component has updated (any time state changes)");
  });
  useEffect(
    function () {
      setTimeout(function () {
        setTime(time + 1);
      }, 1000); // Wait a second, then update `time`
    },
    [time], // If time changes, run the callback function again
  );
  // Deepak: 'Please monitor these items if it changes"

  // This callback function will run when the component is
  // rendered on the page for the first time

  function increment() {
    setCount(count + 1);
  }
  return (
    <div>
      <h2>useEffect</h2>
      <p>You have been on the page for {time} seconds</p>
      <p onClick={increment}>You have clicked {count} times</p>
    </div>
  );
}

module.exports = Effect;
