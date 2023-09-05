import { Outlet } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { useContext } from "react";
import { ColorModeContext } from "../App";

export function RootLayout() {
  const { colorMode, theme } = useContext(ColorModeContext);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: "0 80px",
          height: "80px",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Where in the world?
        </Typography>
        <Button
          variant="text"
          startIcon={
            theme.palette.mode === "dark" ? (
              <DarkModeOutlinedIcon />
            ) : (
              <LightModeOutlinedIcon />
            )
          }
          color="inherit"
          onClick={colorMode.toggleColorMode}
        >
          {theme.palette.mode} mode
        </Button>
      </Box>
      <Outlet />
    </>
  );
}
