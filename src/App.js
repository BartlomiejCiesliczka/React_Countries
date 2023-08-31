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
import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  console.log(theme);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
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
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="main" id={theme}>
        <RouterProvider router={router} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
