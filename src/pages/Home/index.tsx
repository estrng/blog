import React from "react";
import GitHubUserInfo from "../../components/GitHubUserInfo";
import { InfoCard } from "../../components/InfoCard";
import IssueList from "../../components/IssueList";
import Searchbar from "../../components/Searchbar";
import { useGithubUserData } from "../../hooks/useGithubUserData";
import { useGithubIssueData } from "../../hooks/useGitubIssues";

import { Container } from "./styles";

const Home: React.FC = () => {
  const { githubIssueData } = useGithubIssueData();
  const { gitHubData } = useGithubUserData();

  return (
    <Container>
      <InfoCard children={<GitHubUserInfo gitHubData={gitHubData} />} />
      <Searchbar
        title="Publicações"
        subTitle={`${githubIssueData.length} publicações`}
      />
      <IssueList issues={githubIssueData} />
    </Container>
  );
};

export default Home;
