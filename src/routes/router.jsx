import React from "react";
import routes from "./index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import AppWrapper from "../components/AppWrapper";

function AppRouter() {
  return (
    <AppWrapper>
      <MainLayout>
        <Router>
          <Routes>
            {routes.map((route, idx) => (
              <Route
                key={idx + route.name}
                path={route.path}
                element={route.element}
              />
            ))}
          </Routes>
        </Router>
      </MainLayout>
    </AppWrapper>
  );
}

export default AppRouter;
