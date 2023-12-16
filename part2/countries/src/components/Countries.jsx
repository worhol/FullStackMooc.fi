import Country from "./Country";

const Countries = (props) => {
  const filteredCountries = props.countries.filter((country) =>
    country.name.common.toLowerCase().includes(props.filterName.toLowerCase())
  );
  if (filteredCountries.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  } else if (filteredCountries.length === 1) {
    return (
      <Country filteredCountries={filteredCountries}/>
    );
  }
  return (
    <div>
      {filteredCountries.map((country) => (
        <div key={country.name.common}>
          {country.name.common}{" "}
          <button onClick={() => props.showCountry(country.name.common)}>
            show
          </button>
        </div>
      ))}
    </div>
  );
};

export default Countries;
