// What are components?
// They are functions that return markup as JSX
// - They must be UpperCamelCase in their naming
// - They must return a single JSX element
// They represent part of our Single Page Application

// Interpolation in JSX is done using {} (no $)
function HelloWorld() {
  return <h1>Hello World</h1>;
}

module.exports = HelloWorld;
