import React, { useEffect } from "react";
import { useGithubUserData } from "../../hooks/useGithubUserData";
import { SmallInfo } from "../InfoIcon";
import { LabelLink } from "../LabelLink";
import githubIcon from "../../assets/github-icon.svg";
import companyIcon from "../../assets/company.svg";
import followersIcon from "../../assets/followers.svg";

import {
  Container,
  Avatar,
  Left,
  Right,
  Description,
  Name,
  Rightheader,
  Footer,
  Content,
} from "./styles";

export const InfoCard: React.FC = () => {
  const { gitHubData } = useGithubUserData();

  return (
    <>
      {gitHubData && (
        <Container>
          <Left>
            <Avatar src={gitHubData.avatar_url} />
          </Left>
          <Right>
            <Content>
              <Rightheader>
                <Name>{gitHubData.name}</Name>
                <LabelLink
                  label="GITHUB"
                  href={gitHubData.html_url}
                  target="_blank"
                />
              </Rightheader>
              <Description>{gitHubData.bio}</Description>
            </Content>
            <Footer>
              <SmallInfo label={gitHubData.login} icon={githubIcon} />
              <SmallInfo label={gitHubData.company} icon={companyIcon} />
              <SmallInfo
                label={String(gitHubData.followers)}
                icon={followersIcon}
              />
            </Footer>
          </Right>
        </Container>
      )}
    </>
  );
};
