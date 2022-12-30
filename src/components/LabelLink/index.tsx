import React, { HTMLAttributes, AnchorHTMLAttributes } from "react";
import { Container, Label, Icon } from "./styles";
import link from "../../assets/link.svg";

interface LabeLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  label: string;
}

export const LabelLink: React.FC<LabeLinkProps> = ({ label, ...props }) => {
  return (
    <Container {...props}>
      <Label>{label}</Label>
      <Icon src={link} />
    </Container>
  );
};
