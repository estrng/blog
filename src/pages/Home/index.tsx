import React from "react";
import { InfoCard } from "../../components/InfoCard";
import IssueList from "../../components/IssueList";
import Searchbar from "../../components/Searchbar";
import { SearchInput } from "../../components/Searchbar/styles";
import { useGithubUserData } from "../../hooks/useGithubUserData";
import { useGithubIssueData } from "../../hooks/useGitubIssues";

import { Container } from "./styles";

const Home: React.FC = () => {
  const { githubIssueData } = useGithubIssueData();

  return (
    <Container>
      <InfoCard />
      <Searchbar
        title="Publicações"
        subTitle={`${githubIssueData.length} publicações`}
      />
      <IssueList issues={githubIssueData} />
    </Container>
  );
};

export default Home;
