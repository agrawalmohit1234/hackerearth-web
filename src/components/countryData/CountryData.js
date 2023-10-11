import React, { useState, useCallback } from "react";
import debounce from "lodash.debounce";
import Card from "../card/Card";

function CountryData() {
  const [countryName, setCountryName] = useState("");
  const [cards, setCards] = useState([]);

  const debouncedCountryUpdate = useCallback(
    debounce((nextValue) => {
      let url = `https://restcountries.com/v3.1/name/${nextValue}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => setCards([...data]))
        .catch((err) => {
          setCards([...[]]);
        });
    }, 1000),
    []
  );

  const handleCountry = (e) => {
    setCountryName(e.target.value);
    debouncedCountryUpdate(e.target.value);
  };

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Search Country"
        onChange={handleCountry}
        value={countryName}
        className="countryName"
      />
      {countryName === "" ? (
        <div>Type the Country Name</div>
      ) : (
        <Card cards={cards} />
      )}
    </div>
  );
}

export default CountryData;
