import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import Countries from "./components/Countries";
import countryService from "./services/countries";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filterName, setFilter] = useState("");

  useEffect(() => {
    countryService.getAll().then((initialCountry) => {
      setCountries(initialCountry);
    });
  }, []);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div>
      <Filter filterName={filterName} handleFilterChange={handleFilterChange} />
      <Countries filterName={filterName} countries={countries} />
    </div>
  );
};

export default App;
