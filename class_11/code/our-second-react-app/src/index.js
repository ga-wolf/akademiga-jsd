const React = require("react");
const ReactDOM = require("react-dom");

const App = require("./components/app");

let appDiv = document.querySelector("#app");
ReactDOM.render(<App />, appDiv);
