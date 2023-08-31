import { useContext } from "react";
import { ThemeContext } from "../../App";

export function Tile({ country }) {
  const { theme } = useContext(ThemeContext);

  const flag = country.flags;
  const name = country.name.common;
  const population = country.population.toLocaleString();
  const region = country.region;
  const capital = country.capital;

  return (
    <div className="tile" id={theme}>
      <div className="tile--imgCointeiner">
        <img src={flag.png} alt={flag.alt} />
      </div>
      <div className="tile--data">
        <p className="tile--data--name">
          <b>{name}</b>
        </p>
        <div className="tile--data-detail">
          <p className="tile--data-detail--population">
            <b>Population: </b> {population}
          </p>
          <p className="tile--data-detail--region">
            <b>Region: </b> {region}
          </p>
          <p className="tile--data-detail--capital">
            <b>Capital: </b>
            {capital}
          </p>
        </div>
      </div>
    </div>
  );
}
