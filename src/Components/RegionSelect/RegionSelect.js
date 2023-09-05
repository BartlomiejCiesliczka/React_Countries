import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export function RegionSelect({ setRegion, region }) {
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
        onChange={handleChange}
      >
        <MenuItem value="" className="region-selector">
          <em>All</em>
        </MenuItem>
        <MenuItem value="Africa" className="region-selector">
          Africa
        </MenuItem>
        <MenuItem value="Americas">Americas</MenuItem>
        <MenuItem value="Asia">Asia</MenuItem>
        <MenuItem value="Europe">Europe</MenuItem>
        <MenuItem value="Oceania">Oceania</MenuItem>
      </Select>
    </FormControl>
  );
}
