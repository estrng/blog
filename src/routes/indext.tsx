import { Routes as ReactRoutes, Route } from "react-router-dom";

import React from "react";
import { DefaultLayout } from "../layouts";
import Home from "../pages/Home";

export const Routes: React.FC = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </ReactRoutes>
  );
};
