import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Login from "./screens/login/login.screen";
import Home from "./screens/home/home.screen";
import UserGuard from "./components/routers/user-guard/user-guard.component";
import { LoginPath } from "./screens/login/login.types";
import { GlobalStyle } from "./themes/main/global-style";
import theme from "./themes/main/theme";
import { Provider } from "react-redux";
import store from "./store/store/store";
import { HomePath } from "./screens/home/home.types";
import Movie from "./screens/movie/movie.screen";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes>
          <Route element={<Login />} path={"/"} />
          <Route path={LoginPath} element={<Login />} />
          <Route
            path="movie/:name/:id"
            element={
              <UserGuard>
                <Movie />
              </UserGuard>
            }
          />
          <Route
            path={HomePath}
            element={
              <UserGuard>
                <Home />
              </UserGuard>
            }
          />
        </Routes>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
