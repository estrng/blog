import React from "react";
import { Outlet } from "react-router-dom";
import BlogHeader from "../components/BlogHeader";

import { Container } from "./styles";

export const DefaultLayout: React.FC = () => {
  return (
    <Container>
      <BlogHeader />
      <Outlet />
    </Container>
  );
};
