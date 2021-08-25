// Props are values we can pass into components
// - They are immutable (meaning they can't change)
// - They look HTML attributes
// - They will be turned into an object for us to use

function Greetings(props) {
  // let name = props.name;
  // let favNumber = props.favNumber;
  let { name, favNumber } = props;
  return (
    <div>
      <h2>Greetings {name}</h2>
      <h3>Your favourite number is {favNumber}</h3>
    </div>
  );
}

module.exports = Greetings;
