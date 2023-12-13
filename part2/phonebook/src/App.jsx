import { useState, useEffect } from "react";
import personService from "./services/persons";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterName, setFilterName] = useState("");

  useEffect(() => {
    personService.getAll().then((initialPerson) => {
      setPersons(initialPerson);
    });
  }, []);

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
    };

    persons.some(
      (person) => JSON.stringify(person.name) === JSON.stringify(personObject.name)
    )
      ? alert(`${personObject.name} is already added to phonebook`)
      : personService.create(personObject).then((returnedPerson) => {
          setPersons(persons.concat(returnedPerson));
          setNewName("");
          setNewNumber("");
        });
  };

  const removePerson = (id) => {
    const person = persons.find((p) => p.id === id);

    if (person) {
      if (window.confirm(`Delete ${person.name} ?`)) {
        personService.remove(id).then(() => {
          setPersons((prevPersons) => prevPersons.filter((p) => p.id !== id));
        });
      }
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };
  const handleFilterChange = (event) => {
    setFilterName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterName={filterName} handleFilterChange={handleFilterChange} />
      <h2>Add a new</h2>
      <PersonForm
        addPerson={addPerson}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        newName={newName}
        newNumber={newNumber}
      />
      <h2>Numbers</h2>
      <Persons
        persons={persons}
        filterName={filterName}
        removePerson={removePerson}
      />
    </div>
  );
};

export default App;
