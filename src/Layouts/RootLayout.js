import { Outlet } from "react-router-dom";
import Typography from "@mui/material/Typography";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import Button from "@mui/material/Button";
import { useContext } from "react";
import { ThemeContext } from "../App";

export function RootLayout() {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <>
      <nav className="appbar" id={theme}>
        <Typography id={theme} variant="h5" sx={{ fontWeight: "bold" }}>
          Where in the world?
        </Typography>
        <Button
          id={theme}
          variant="text"
          startIcon={
            theme === "dark" ? (
              <LightModeOutlinedIcon />
            ) : (
              <DarkModeOutlinedIcon />
            )
          }
          sx={{ color: "black" }}
          onClick={toggleTheme}
        >
          Dark Mode
        </Button>
      </nav>
      <div className="main" id={theme}>
        <Outlet />
      </div>
    </>
  );
}
