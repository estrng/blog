import React from "react";
import { SiTypescript } from "react-icons/si";
import { LinkProps } from "react-router-dom";
import { GithubIssueData } from "../../../hooks/useGitubIssues";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

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
  title: string;
  body: string;
  number: number;
  date?: string;
}

const IssueCard: React.FC<IssueCardProps> = ({
  title,
  body,
  date,
  to,
  number,
}) => {
  const rtf1 = new Intl.RelativeTimeFormat("en", { style: "narrow" });
  const dta = date?.toString() as string;
  const date1 = new Date(dta).getDate();

  return (
    <IssueCardContainer to={to}>
      <UpperContent>
        <IssueCardHeader>
          <IssueHeadTitle>{`Post #${number}`}</IssueHeadTitle>
          <IssueHeadTime>{rtf1.format(date1, "hours")}</IssueHeadTime>
        </IssueCardHeader>
        <IssueCardBody>{title}</IssueCardBody>
      </UpperContent>
      <IssueCardFooter>
        <SiTypescript size={26} />
      </IssueCardFooter>
    </IssueCardContainer>
  );
};

export default IssueCard;
