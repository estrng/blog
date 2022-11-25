import React from "react";

import { Container, Avatar, Left, Right } from "./styles";

export const InfoCard: React.FC = () => {
  return (
    <Container>
      <Left>
        <Avatar />
      </Left>
      <Right>
        <h1>Nome</h1>
        <h2>Descrição</h2>
      </Right>
    </Container>
  );
};
