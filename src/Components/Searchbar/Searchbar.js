import SearchIcon from "@mui/icons-material/Search";
import { InputBase, Paper } from "@mui/material";

export function Searchbar({ setSearchCountry }) {
  return (
    <Paper
      sx={{
        p: "4px 5px 4px 18px",
        borderRadius: "25px",
        boxShadow: "none",
        display: "flex",
        alignItems: "center",
        width: "550px",
      }}
      className="searchbar-container"
    >
      <SearchIcon />
      <InputBase
        className="search"
        placeholder="Search for a country..."
        variant="outlined"
        sx={{ width: "550px" }}
        onChange={(e) => setSearchCountry(e.target.value)}
      />
    </Paper>
  );
}
