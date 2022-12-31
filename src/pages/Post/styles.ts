import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  background: #071422;

  gap: 58px;
`;

export const PostInfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  gap: 32px;
`;

export const PostHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const PostTitle = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 130%;
`;

export const PostFooter = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  gap: 32px;
`;

export const PostContent = styled.article`
  width: 50%;
  height: 100%;
`;
