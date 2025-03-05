import { useState } from "react";
import "./styles.css";

const countries = [
  {
    name: "India",
    value: "IN",
    cities: ["Delhi", "Mumbai"],
  },
  {
    name: "Pakistan",
    value: "PK",
    cities: ["Karachi", "Lahore"],
  },
  {
    name: "Bangladesh",
    value: "BD",
    cities: ["Dhaka", "Chittagong"],
  },
];

export default function App() {
  const [countryIndex, setCountryIndex] = useState("");
  return (
    <div className="App">
      <select
        value={countryIndex}
        onChange={(e) => setCountryIndex(e.target.value)}
      >
        <option value="">SelectCountry</option>
        {countries.map((item, index) => {
          return (
            <option key={index} value={index}>
              {item.name}
            </option>
          );
        })}
      </select>

      {/* select 2nd box */}
      <select disabled={countryIndex === ""}>
        <option value={""}>Select City</option>
        {countryIndex !== "" &&
          countries[countryIndex].cities.map((city, index) => {
            return (
              <option key={index} value={"city"}>
                {city}
              </option>
            );
          })}
      </select>
    </div>
  );
}
