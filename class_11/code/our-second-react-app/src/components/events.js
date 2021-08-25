function Events() {
  function onButtonClick() {
    console.log("The button was clicked");
  }
  function onMouseMove() {
    console.log("The mouse was moving");
  }
  function onFormSubmit(event) {
    event.preventDefault();
    console.log("The form was submitted");
  }
  return (
    <div>
      <h4 onMouseMove={onMouseMove}>Heading (mousemove)</h4>
      <button onClick={onButtonClick}>Click Me</button>
      <form onSubmit={onFormSubmit}>
        <input type="submit" value="Submit Form" />
      </form>
    </div>
  );
}

module.exports = Events;
