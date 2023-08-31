import SearchIcon from "@mui/icons-material/Search";
import { IconButton, InputBase, Paper } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../../App";

export function Searchbar({ setSearchCountry }) {
  const { theme } = useContext(ThemeContext);
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
      id={theme}
    >
      <SearchIcon />
      <InputBase
        className="search"
        id={theme}
        placeholder="Search for a country..."
        variant="outlined"
        sx={{ width: "550px" }}
        onChange={(e) => setSearchCountry(e.target.value)}
      />
    </Paper>
  );
}
