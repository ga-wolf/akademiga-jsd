const { useState } = require("react");

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("Weak");
  function updateUsername(event) {
    setUsername(event.target.value); // Updates state and rerenders the component
  }
  function updatePassword(event) {
    let p = event.target.value;
    if (p.length >= 6) {
      setPasswordStrength("Strong");
    } else {
      setPasswordStrength("Weak");
    }
    setPassword(p);
  }
  function handleSubmit(event) {
    event.preventDefault(); // Stop the browser refreshing, we want JS to handle this
    console.log("Time to login by making an API request (eventually)...");
  }
  return (
    <form onSubmit={handleSubmit}>
      <p>Your username is {username}</p>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={updateUsername}
      />
      <p>Your password is {passwordStrength}</p>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={updatePassword}
      />
      <input type="submit" value="Login" />
    </form>
  );
}

module.exports = LoginForm;
