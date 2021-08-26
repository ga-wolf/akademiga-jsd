const React = require("react");
const ReactDOM = require("react-dom");
const App = require("./components/app");

let target = document.querySelector("#app");

ReactDOM.render(<App />, target); // Component to load, where to show it
