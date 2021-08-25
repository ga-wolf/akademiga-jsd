function Student(props) {
  let { name } = props;
  return (
    <div>
      <p>Student Name: {name}</p>
    </div>
  );
}

module.exports = Student;
