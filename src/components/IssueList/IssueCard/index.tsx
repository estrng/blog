import React from "react";
import { SiTypescript } from "react-icons/si";

import {
  IssueCardContainer,
  IssueCardHeader,
  IssueCardBody,
  IssueCardFooter,
  IssueHeadTitle,
  IssueHeadTime,
  UpperContent,
} from "./styles";

interface IssueCardProps {
  title: string;
  body: string;
  date?: Date;
}

const IssueCard: React.FC<IssueCardProps> = ({ title, body, date }) => {
  return (
    <IssueCardContainer>
      <UpperContent>
        <IssueCardHeader>
          <IssueHeadTitle>{title}</IssueHeadTitle>
          <IssueHeadTime>{"Há 1 dia"}</IssueHeadTime>
        </IssueCardHeader>
        <IssueCardBody>{body}</IssueCardBody>
      </UpperContent>
      <IssueCardFooter>
        <SiTypescript size={26} />
      </IssueCardFooter>
    </IssueCardContainer>
  );
};

export default IssueCard;
