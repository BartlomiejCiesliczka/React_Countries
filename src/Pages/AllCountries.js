import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { RegionSelect } from "../Components/RegionSelect/RegionSelect";
import { Searchbar } from "../Components/Searchbar/Searchbar";
import { Tile } from "../Components/Tile/Tile";

export function AllCountries() {
  const countries = useLoaderData();
  const [searchCountry, setSearchCountry] = useState("");
  const [region, setRegion] = useState("");
  return (
    <>
      <div className="navigation-bar">
        <Searchbar setSearchCountry={setSearchCountry} />
        <RegionSelect region={region} setRegion={setRegion} />
      </div>
      <div className="country-list-layout">
        {countries
          .filter((country) => {
            if (region === "" && searchCountry === "") {
              return country;
            } else if (
              region === "" &&
              country.name.common
                .toLocaleLowerCase()
                .includes(searchCountry.toLocaleLowerCase())
            ) {
              return country;
            } else if (country.region === region && searchCountry === "") {
              return country;
            } else if (
              country.region === region &&
              country.name.common
                .toLocaleLowerCase()
                .includes(searchCountry.toLocaleLowerCase())
            ) {
              return country;
            }
          })
          .map((country) => (
            <Link to={country.name.common.toString()}>
              <Tile key={country.name.common} country={country} />
            </Link>
          ))}
      </div>
    </>
  );
}

// loader function

export const CountryLoader = async ({ params }) => {
  const res = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags"
  );

  return res.json();
};
