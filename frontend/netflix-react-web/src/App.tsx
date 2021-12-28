import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Login from "./screens/login/login.screen";
import { LoginPath } from "./screens/login/login.types";
import { GlobalStyle } from "./themes/main/global-style";
import theme from "./themes/main/theme";
import { Provider } from "react-redux";
import store from "./store/store/store";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes>
          <Route path={LoginPath} element={<Login />} />
        </Routes>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
