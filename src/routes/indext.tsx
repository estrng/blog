import { Routes as ReactRoutes, Route } from "react-router-dom";

import React from "react";
import { DefaultLayout } from "../layouts";
import Home from "../pages/Home";
import Post from "../pages/Post";

export const Routes: React.FC = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/post/:post_id" element={<Post />} />
      </Route>
    </ReactRoutes>
  );
};
