const { BrowserRouter, Switch, Route } = require("react-router-dom");
const Nav = require("./nav");
const Game = require("./game");
const Clock = require("./clock");
const SignUp = require("./signup");
const Home = require("./home");
const About = require("./about");
const Contact = require("./contact");
const Hello = require("./hello");
const Calculator = require("./calculator");

function App() {
  let pageTitle = "Our React Weather App";
  return (
    <BrowserRouter>
      <Nav title={pageTitle} />
      <Clock />
      <Switch>
        <Route exact={true} path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/hello/:name" children={<Hello />} />
        <Route path="/add/:x/:y" children={<Calculator />} />
      </Switch>
    </BrowserRouter>
  );
}

module.exports = App;
