import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ThemeProvider from "./styles/ThemeProvider";
import GlobaSytle from "./styles/GlobalStyle";
import Routes from "routes";

function App() {
  return (
    <ThemeProvider>
      <GlobaSytle />
      <Router>
        <Routes />
      </Router>
    </ThemeProvider>
  );
}

export default App;

