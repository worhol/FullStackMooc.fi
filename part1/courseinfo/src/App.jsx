const Course = (props) => {
  return (
    <div>
      <Header course={props.course} />
      <Content course={props.course} />
      <Total course={props.course}/>
    </div>
  );
};

const Header = (props) => {
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  );
};
const Content = (props) => {
  return (
    <div>
      <ul>
        {props.course.parts.map((part) => (
          <li key={part.id}>
            <Part name={part.name} exercises={part.exercises} />
          </li>
        ))}
      </ul>
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
  return (
    <div>
      <p>
        Number of exercises{" "}
        {props.course.parts[0].exercises +
          props.course.parts[1].exercises +
          props.course.parts[2].exercises}
      </p>
    </div>
  );
};

const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
      {
        name: "Redux",
        exercises: 11,
        id: 4,
      },
    ],
  };

  return (
    <div>
      <Course course={course} />
    </div>
  );
};

export default App;
