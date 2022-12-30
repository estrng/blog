import React from "react";

import { Container, TextHeader, Title, Sub, SearchInput } from "./styles";

interface SearchbarProps {
  title: string;
  subTitle: string;
}

const Searchbar: React.FC<SearchbarProps> = ({ title, subTitle }) => {
  return (
    <Container>
      <TextHeader>
        <Title>{title}</Title>
        <Sub>{subTitle}</Sub>
      </TextHeader>
      <SearchInput placeholder="Buscar um tópico" />
    </Container>
  );
};

export default Searchbar;
