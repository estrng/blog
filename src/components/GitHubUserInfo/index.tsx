import React from "react";
import { SmallInfo } from "../InfoIcon";
import { LabelLink } from "../LabelLink";
import githubIcon from "../../assets/github-icon.svg";
import companyIcon from "../../assets/company.svg";
import followersIcon from "../../assets/followers.svg";
import { HiLocationMarker } from "react-icons/hi";

import {
  Left,
  Avatar,
  Right,
  Content,
  Rightheader,
  Name,
  Description,
  Footer,
} from "./styles";
import { GithubUserData } from "../../hooks/useGithubUserData";

interface GitHubUserInfoProps {
  gitHubData: GithubUserData;
}

const GitHubUserInfo: React.FC<GitHubUserInfoProps> = ({ gitHubData }) => {
  const {
    avatar_url,
    name,
    html_url,
    bio,
    login,
    company,
    followers,
    location,
  } = gitHubData;
  return (
    <>
      <Left>
        <Avatar src={avatar_url} />
      </Left>
      <Right>
        <Content>
          <Rightheader>
            <Name>{name}</Name>
            <LabelLink label="GITHUB" icon href={html_url} target="_blank" />
          </Rightheader>
          <Description>{bio}</Description>
        </Content>
        <Footer>
          <SmallInfo label={login} icon={githubIcon} />
          <SmallInfo label={company} icon={companyIcon} />
          <SmallInfo label={String(followers)} icon={followersIcon} />
          {
            <div
              style={{
                display: "flex",
                alignContent: "center",
                gap: 6,
              }}
            >
              <HiLocationMarker size={18} color="#3A536B" />
              {location}
            </div>
          }
        </Footer>
      </Right>
    </>
  );
};

export default GitHubUserInfo;
