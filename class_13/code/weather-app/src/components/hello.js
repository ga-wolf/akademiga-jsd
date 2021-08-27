const { useParams } = require("react-router-dom");

function Hello() {
  let params = useParams();
  return (
    <div>
      <h2>Hello {params.name.toUpperCase()}</h2>
    </div>
  );
}

module.exports = Hello;
