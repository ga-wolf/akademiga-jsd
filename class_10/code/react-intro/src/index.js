const React = require("react");
const ReactDOM = require("react-dom");

function HelloWorld() {
  return <h1>React has taken control</h1>;
}

let appDiv = document.querySelector("#app");
ReactDOM.render(<HelloWorld />, appDiv);
