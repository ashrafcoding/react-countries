import React, { useState } from "react";
import { Route } from "react-router-dom";
import themeContext, { themes } from "./ThemeContext";
import Home from "./Home";
import Navbar from "./components/Navbar";
import CountryDetail from "./components/CountryDetail";


function App() {
  const [theme, setTheme] = useState(themes.dark);
  const [body, setBody] = useState({ background: "var(--night-vdbl)" });
  const toggleTheme = () => {
    theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark);

    theme === themes.dark
      ? setBody({ background: "var(--light-vlgr)" })
      : setBody({ background: "var(--night-vdbl)" });
  };

  return (
    <>
      <themeContext.Provider value={theme}>
        <div style={body}>
          <Navbar toggle= {toggleTheme}/>
          <Route path="/" component={Home} exact />
          <Route path="/country-detail/:params">
            <CountryDetail />
          </Route>
        </div>
      </themeContext.Provider>
    </>
  );
}

export default App;
