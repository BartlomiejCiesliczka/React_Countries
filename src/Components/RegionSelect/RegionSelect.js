import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { ThemeContext } from "../../App";
import { useContext } from "react";

export function RegionSelect({ setRegion, region }) {
  const { theme } = useContext(ThemeContext);
  const handleChange = (e) => {
    setRegion(e.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 170 }}>
      <InputLabel id="region-filter">Filter by Region</InputLabel>
      <Select
        value={region}
        label="Filter by Region"
        className="region-selector"
        id={theme}
        onChange={handleChange}
      >
        <MenuItem value="" className="region-selector" id={theme}>
          <em>All</em>
        </MenuItem>
        <MenuItem value="Africa" className="region-selector" id={theme}>
          Africa
        </MenuItem>
        <MenuItem value="Americas" id={theme}>
          Americas
        </MenuItem>
        <MenuItem value="Asia" id={theme}>
          Asia
        </MenuItem>
        <MenuItem value="Europe" id={theme}>
          Europe
        </MenuItem>
        <MenuItem value="Oceania" id={theme}>
          Oceania
        </MenuItem>
      </Select>
    </FormControl>
  );
}
