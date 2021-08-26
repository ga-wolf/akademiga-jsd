function Footer() {
  function onButtonClick() {
    console.log("The button was clicked");
  }

  function onDoubleClick() {
    console.log("The heading was double clicked");
  }

  return (
    <footer>
      <hr />
      <h3 onDoubleClick={onDoubleClick}>Footer</h3>
      <button onClick={onButtonClick}>Click Me</button>
    </footer>
  );
}

module.exports = Footer;
