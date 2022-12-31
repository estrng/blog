import React from "react";

import { Container } from "./styles";

type Props = {
  children: React.ReactNode;
};

export const InfoCard: React.FC<Props> = ({ children }) => {
  return <Container>{children}</Container>;
};
