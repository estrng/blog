import React from "react";

import { Container, Label, Icon } from "./styles";

interface SmallInfoProps {
  label: string;
  icon: unknown;
}

export const SmallInfo: React.FC<SmallInfoProps> = ({ label, icon }) => {
  return (
    <Container>
      <Icon src={icon as string} />
      <Label>{label}</Label>
    </Container>
  );
};
