import React from "react";
import { GithubIssueData } from "../../hooks/useGitubIssues";
import IssueCard from "./IssueCard";

import { Container } from "./styles";

/* interface IssueListProps {
  issues: GithubIssueData[];
} */
interface IssueFake {
  id: number;
  title: string;
  body: string;
  date: Date;
}

interface IssueListProps {
  issues: IssueFake[];
}

const IssueList: React.FC<IssueListProps> = ({ issues }) => {
  return (
    <Container>
      {issues.map((issue) => (
        <IssueCard
          key={issue.id}
          title={issue.title}
          body={issue.body}
          //date={issue.date.to}
        />
      ))}
    </Container>
  );
};

export default IssueList;
