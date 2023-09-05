import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useParams, useLoaderData, Link } from "react-router-dom";

export function CountryDetail({}) {
  const { SelectedCountry } = useParams();
  const [data] = useLoaderData();
  let country = {
    flag: data.flags,
    capital: data.capital && data.capital[0],
    name: data.name.common,
    nativeName: Object.values(data.name.nativeName)
      ?.map((native) => native.common)
      .join(", "),
    population: data.population.toLocaleString(),
    region: data.region,
    subregion: data.subregion,
    tld: data.tld?.join(", "),
    currencies: Object.values(data.currencies)
      ?.map((currency) => currency.name)
      .join(", "),
    languages: Object.values(data.languages)
      ?.map((language) => language)
      .join(", "),
    border: data.borders?.map((country) => country).join(", "),
  };

  return (
    <div className="detail-page">
      <Stack
        direction="row"
        spacing={2}
        sx={{ marginLeft: "100px", padding: "5px 15px" }}
      >
        <Link to={"/React_Countries"}>
          <Button sx={{ color: "text.primary" }} startIcon={<ArrowBackIcon />}>
            Back
          </Button>
        </Link>
      </Stack>
      <div className="detail-container">
        <div className="detail--imgContainer">
          <img
            className="detail--img"
            src={country.flag.svg}
            alt={country.flag.alt}
          />
        </div>
        <div className="detail--info">
          <div className="detail-name">{country.name}</div>
          <div className="detail-lists">
            <ul className="first-ul">
              <li>
                <b>Native Name:</b> {country.nativeName}
              </li>
              <li>
                <b>Population:</b> {country.population}
              </li>
              <li>
                <b>Region:</b> {country.region}
              </li>
              <li>
                <b>Sub Region:</b> {country.subregion}
              </li>
              <li>
                <b>Capital:</b> {country.capital}
              </li>
            </ul>
            <ul>
              <li>
                <b>Top Level Domain:</b> {country.tld}
              </li>
              <li>
                <b>Currencies:</b> {country.currencies}
              </li>
              <li>
                <b>Languages:</b> {country.languages}
              </li>
            </ul>
          </div>
          <div>
            <b>Border Countries:</b> {country.border}
          </div>
        </div>
      </div>
    </div>
  );
}

// loader function
export const CountryDetailLoader = async ({ params }) => {
  const { SelectedCountry } = params;

  const res = await fetch(
    `https://restcountries.com/v3.1/name/` + SelectedCountry
  );

  return res.json();
};
