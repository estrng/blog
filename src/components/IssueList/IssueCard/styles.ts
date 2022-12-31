import styled from "styled-components";
import { Link } from "react-router-dom";

export const IssueCardContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 460px;
  height: 260px;
  padding: 32px;
  gap: 20px;

  background: #112131;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  border-radius: 10px;
  color: #fff;

  cursor: pointer;
  text-decoration: none;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
  }

  &:visited {
    text-decoration: none;
  }
`;

export const UpperContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const IssueCardHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 160%;
`;

export const IssueHeadTitle = styled.p``;

export const IssueHeadTime = styled.h6`
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;
  color: #7b96b2;
`;

export const IssueCardBody = styled.div`
  height: 100%;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;

  overflow: hidden;
  text-overflow: ellipsis;
`;

export const IssueCardFooter = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;
