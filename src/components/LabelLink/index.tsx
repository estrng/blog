import React, { HTMLAttributes, AnchorHTMLAttributes } from "react";
import { Container, Label, Icon } from "./styles";
import link from "../../assets/link.svg";

interface LabeLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  label: string;
  icon?: boolean;
}

export const LabelLink: React.FC<LabeLinkProps> = ({
  label,
  icon = false,
  ...props
}) => {
  return (
    <Container {...props}>
      <Label>{label}</Label>
      {icon && <Icon src={link} />}
    </Container>
  );
};
