
const Country = (props) => {
  const weather = props.weather
  return (
    <div>
      {props.filteredCountries.map((country) => (
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
          <p>Temperature: {weather?.main?.temp} C</p>
          <img src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}/>
          <p>Wind {weather?.wind?.speed} m/s</p>
        </div>
      ))}
    </div>
  );
};

export default Country;
