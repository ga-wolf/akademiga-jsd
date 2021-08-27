const { useState, useEffect } = require("react");

function SignUp() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(true); // They haven't typed yet

  let borderColor = "green"; // By default, we show a green border
  if (error) {
    // If there is an error
    borderColor = "red"; // Make the border red
  }

  function handleChange(event) {
    setEmail(event.target.value); // Updates the state, and re-renders the component
  }

  // Let's add some validations!
  useEffect(
    function () {
      let isEmailValid = email.includes("@");
      setError(!isEmailValid);
      // If it's an invalid email, error should be true
    },
    [email], // If email changes, run the callback function
  );

  return (
    <form>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={handleChange}
        style={{
          border: `2px solid ${borderColor}`,
        }}
      />
      <input type="submit" value="Sign Up" />
    </form>
  );
}

module.exports = SignUp;

// useEffect can receives two parameters
//  - a callback
//  - optionally, a dependencies array

// useEffect changes based on the second parameter
//  If the second parameter is []
//    The callback run once as soon as the component is rendered on the page
//  If the second parameter doesn't exist
//    The callback will run every time the component re-renders
//        (everytime any state changes)
//  If the second parameter is an array with items in it
//    The callback will run any time any of those items change
