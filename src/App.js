import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { RootLayout } from "./Layouts/RootLayout";
import { AllCountries, CountryLoader } from "./Pages/AllCountries";
import { CountryDetail, CountryDetailLoader } from "./Pages/CountryDetail";
import { Region } from "./Pages/Region";
import CssBaseline from "@mui/material/CssBaseline";

//dark theme
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import { useMemo, useState, createContext } from "react";

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

function App() {
  const [mode, setMode] = useState("light");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  //router base
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="React_Countries" element={<RootLayout />}>
        <Route index element={<AllCountries />} loader={CountryLoader} />
        <Route
          path=":SelectedCountry"
          element={<CountryDetail />}
          loader={CountryDetailLoader}
        />
        <Route path=":region" element={<Region />} />
      </Route>
    )
  );

  return (
    <>
      <ColorModeContext.Provider value={{ colorMode, theme }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <RouterProvider router={router} />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}

export default App;
