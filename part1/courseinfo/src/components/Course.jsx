const Course = (props) => {
    return (
      <div>
        <Header course={props.course} />
        <Content course={props.course} />
        <Total course={props.course} />
      </div>
    );
  };
  
  const Header = (props) => {
    return (
      <div>
        <h2>{props.course.name}</h2>
      </div>
    );
  };
  const Content = (props) => {
    return (
      <div>
        {props.course.parts.map((part) => (
          <div key={part.id}>
            <Part name={part.name} exercises={part.exercises} />
          </div>
        ))}
      </div>
    );
  };
  const Part = (props) => {
    return (
      <p>
        {props.name} {props.exercises}
      </p>
    );
  };
  
  const Total = (props) => {
    const total = props.course.parts.reduce(
      (sum, currentValue) => sum + currentValue.exercises,
      0
    );
    return (
      <div>
        <h4>total of {total} exercises</h4>
      </div>
    );
  };

  export default Course