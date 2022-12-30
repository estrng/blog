import React from "react";
import { GithubIssueData as IssueData } from "../../hooks/useGitubIssues";
import IssueCard from "./IssueCard";

import { Container } from "./styles";

interface IssueListProps {
  issues: IssueData[];
}

const IssueList: React.FC<IssueListProps> = ({ issues }) => {
  return (
    <Container>
      {issues.map((issue) => (
        <IssueCard
          to={{
            pathname: `/post`,
          }}
          key={issue.id}
          number={issue.number}
          title={issue.title}
          date={issue.created_at}
          body={issue.body}
          //date={issue.date.to}
        />
      ))}
    </Container>
  );
};

export default IssueList;
