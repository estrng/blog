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

  const fakeIssue = [
    {
      id: 1,
      title: "Um titulo massa aqui",
      body: "uma descrição massa e grande aqui para uma rederização",
      date: new Date(),
    },
    {
      id: 2,
      title: "Um titulo massa aqui",
      body: "uma descrição massa e grande aqui para uma rederização",
      date: new Date(),
    },
    {
      id: 3,
      title: "Um titulo massa aqui",
      body: "uma descrição massa e grande aqui para uma rederização",
      date: new Date(),
    },

    {
      id: 4,
      title: "Um titulo massa aqui",
      body: "uma descrição massa e grande aqui para uma rederização",
      date: new Date(),
    },
  ];

  return (
    <Container>
      <InfoCard />
      <Searchbar
        title="Publicações"
        subTitle={`${githubIssueData.length} publicações`}
      />
      <IssueList issues={fakeIssue} />
    </Container>
  );
};

export default Home;
