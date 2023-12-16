import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import Countries from "./components/Countries";
import countryService from "./services/countries";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filterName, setFilter] = useState("");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    countryService.getAll().then((initialCountry) => {
      setCountries(initialCountry);
    });
  }, []);

  useEffect(() => {
    const matchingCountry = countries.find(
      (country) => country.name.common === filterName
    );
    if (matchingCountry) {
      countryService
        .getWeatherData(matchingCountry)
        .then((weatherData) => {
          setWeather(weatherData);
        })
        .catch((error) => {
          console.error("Error fetching weather data:", error);
        });
    }
  }, [countries, filterName]);

  const showCountry = (name) => {
    setFilter(name);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div>
      <Filter filterName={filterName} handleFilterChange={handleFilterChange} />
      <Countries
        filterName={filterName}
        countries={countries}
        showCountry={showCountry}
        weather={weather}
      />
    </div>
  );
};

export default App;
