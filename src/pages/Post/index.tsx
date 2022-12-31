import React from "react";
import { InfoCard } from "../../components/InfoCard";
import { LabelLink } from "../../components/LabelLink";
import githubIcon from "../../assets/github-icon.svg";
import calenderIcon from "../../assets/date.svg";
import commentsIcon from "../../assets/comments.svg";
import ReactMarkdown from "react-markdown";

import {
  Container,
  PostHeader,
  PostTitle,
  PostFooter,
  PostInfoContainer,
  PostContent,
} from "./styles";
import { SmallInfo } from "../../components/InfoIcon";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { GithubIssueData } from "../../hooks/useGitubIssues";
import { formateDateDistance } from "../../helpers/date";

const Post: React.FC = () => {
  const [post, setPost] = React.useState({} as GithubIssueData);
  const { post_id } = useParams();
  console.log("A porra do POST ID: ", post_id);

  const navigate = useNavigate();

  React.useEffect(() => {
    (async () => {
      const res = await axios.get(
        `https://api.github.com/repos/estrng/blog/issues/${post_id}`
      );
      setPost(res.data);
    })();
  }, []);

  const handleGoBack = () => navigate(-1);

  const hasData = () => Object.keys(post).length > 0;

  return (
    <Container>
      {!hasData ? (
        "Obtendo..."
      ) : (
        <>
          <InfoCard>
            <PostInfoContainer>
              <PostHeader>
                <LabelLink label="< VOLTAR" onClick={handleGoBack} />
                <LabelLink
                  href={`https://github.com/estrng/blog/issues/${post_id}`}
                  label="COMENTE NO GITHUB"
                  target="_blank"
                  icon
                />
              </PostHeader>
              <PostTitle>{post.title}</PostTitle>
              <PostFooter>
                <SmallInfo label={post.user?.login} icon={githubIcon} />
                <SmallInfo
                  label={formateDateDistance(post.created_at)}
                  icon={calenderIcon}
                />
                <SmallInfo
                  label={`${String(post.comments)} comentários`}
                  icon={commentsIcon}
                />
              </PostFooter>
            </PostInfoContainer>
          </InfoCard>
          <PostContent>
            <ReactMarkdown>{post.body}</ReactMarkdown>
          </PostContent>
        </>
      )}
    </Container>
  );
};

export default Post;
