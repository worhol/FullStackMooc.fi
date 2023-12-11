const PersonForm = (props) => {
  return (
    <form onSubmit={props.addPerson}>
      <Input
        name={"name"}
        value={props.newName}
        functionName={props.handleNameChange}
      />
      <Input
        name={"number"}
        value={props.newNumber}
        functionName={props.handleNumberChange}
      />
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

const Input = (props) => {
  return (
    <div>
      {props.name}: <input value={props.value} onChange={props.functionName} />
    </div>
  );
};
export default PersonForm;
