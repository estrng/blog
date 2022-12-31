import React from "react";
import { GithubIssueData as IssueData } from "../../hooks/useGitubIssues";
import { IssueCard } from "./IssueCard";

import { Container } from "./styles";

interface IssueListProps {
  issues: IssueData[];
}

const IssueList: React.FC<IssueListProps> = ({ issues }) => {
  return (
    <Container>
      {issues.map((issue) => {
        const issueData = {
          number: issue.number,
          title: issue.title,
          date: issue.created_at,
          labels: issue.labels,
        };

        return <IssueCard to={`/post`} key={issue.id} issue={issueData} />;
      })}
    </Container>
  );
};

export default IssueList;
