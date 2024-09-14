import React from "react";

import { Container } from "./styles";
import cover from "../../assets/cover-header.svg";

const BlogHeader: React.FC = () => {
  return (
    <Container>
      <img src={cover} alt="cover-in-header" />
    </Container>
  );
};

export default BlogHeader;
