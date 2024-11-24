import React from "react";
import routes from "./index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function AppRouter() {
  return (
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
  );
}

export default AppRouter;
