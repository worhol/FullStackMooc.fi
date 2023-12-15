const Countries = (props) => {
  const filteredCountries = props.countries.filter((country) =>
    country.name.common.toLowerCase().includes(props.filterName.toLowerCase())
  );
  if (filteredCountries.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  } else if (filteredCountries.length === 1) {
    return (
      <div>
        {filteredCountries.map((country) => (
          <div key={country.name.common}>
            <h2>{country.name.common}</h2>
            <p>Capital: {country.capital}</p>
            <p>Area: {country.area}</p>
            <h3>Languages:</h3>
            <ul>
              {Object.entries(country.languages).map(([code, name]) => (
                <li key={code}>{name}</li>
              ))}
            </ul>
            <img src={country.flags.png} alt={country.flags.alt} />
            <h2>Weather in {country.capital}</h2>
          </div>
        ))}
      </div>
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
