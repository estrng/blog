import React from "react";
import { SiTypescript, SiNodedotjs, SiJavascript } from "react-icons/si";
import { LinkProps } from "react-router-dom";
import { formateDateDistance } from "../../../helpers/date";
import { Labels } from "../../../hooks/useGitubIssues";

import {
  IssueCardContainer,
  IssueCardHeader,
  IssueCardBody,
  IssueCardFooter,
  IssueHeadTitle,
  IssueHeadTime,
  UpperContent,
} from "./styles";

interface IssueCardProps extends LinkProps {
  issue: {
    title: string;
    number: number;
    date?: string;
    labels?: Array<Labels>;
  };
}

export const IssueCard: React.FC<IssueCardProps> = ({ issue, to }) => {
  const { title, date, number, labels } = issue;

  const getLabelIcon = (id: number, name: string, size: number) => {
    const compArray = [
      { name: "NodeJS", component: <SiTypescript key={id} size={size} /> },
      { name: "TypeScript", component: <SiNodedotjs key={id} size={size} /> },
      { name: "JavaScript", component: <SiJavascript key={id} size={size} /> },
    ];

    const index = compArray.findIndex((item) => item.name === name);

    return compArray[index].component;
  };

  const hasLabels = Object.keys(labels as Labels[]).length > 0;

  return (
    <IssueCardContainer to={to}>
      <UpperContent>
        <IssueCardHeader>
          <IssueHeadTitle>{`Post #${number}`}</IssueHeadTitle>
          <IssueHeadTime>{formateDateDistance(date)}</IssueHeadTime>
        </IssueCardHeader>
        <IssueCardBody>{title}</IssueCardBody>
      </UpperContent>
      <IssueCardFooter>
        {hasLabels
          ? labels?.map((label) => getLabelIcon(label.id, label.name, 16))
          : "Sem tópicos"}
      </IssueCardFooter>
    </IssueCardContainer>
  );
};
