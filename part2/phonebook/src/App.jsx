import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");
  // const [showAll, setShowAll] = useState(true);
  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
    };
    
    persons.some((person) => person.name === personObject.name)
      ? alert(`${personObject.name} is already added to phonebook`)
      : setPersons(persons.concat(personObject));

    setNewName("");
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  // const namesToShow = showAll;

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person) => (
          <div key={person.name}>{person.name}</div>
        ))}
      </div>
    </div>
  );
};

export default App;
