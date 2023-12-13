const Persons = (props) => {
  return (
    <div>
      {props.persons
        .filter((person) =>
          person.name.toLowerCase().includes(props.filterName.toLowerCase())
        )
        .map((person) => (
          <div key={person.name}>
            {person.name} {person.number}{" "}
            <button onClick={() => props.removePerson(person.id)}>delete</button>
          </div>
        ))}
    </div>
  );
};

export default Persons;
