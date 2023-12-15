const Countries = (props) => {
  return (
    <div>
      {props.countries
        .filter((country) =>
          country.name.common
            .toLowerCase()
            .includes(props.filterName.toLowerCase())
        )
        .map((country) => (
          <div key={country.name.common}>{country.name.common}</div>
        ))}
    </div>
  );
};

export default Countries;
