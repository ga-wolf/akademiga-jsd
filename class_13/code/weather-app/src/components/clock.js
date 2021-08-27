const { useState, useEffect } = require("react");

function Clock() {
  const [time, setTime] = useState(0);

  useEffect(
    function () {
      setTimeout(function () {
        setTime(time + 1); // Update the time variable
      }, 1000); // Wait a second and call the callback
    },
    [time], // Anytime time changes, call the callback function
  );

  return (
    <div>
      <h2>You have been on the page for {time} seconds</h2>
    </div>
  );
}

module.exports = Clock;
