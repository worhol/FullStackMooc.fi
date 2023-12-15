const Filter = (props) => {
    return (
      <div>
        find countries {" "}
        <input value={props.filterName} onChange={props.handleFilterChange} />
      </div>
    );
  };
  
  export default Filter;