import styled from "styled-components";

export const IssueCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 260px;
  padding: 32px;
  gap: 20px;

  background: #112131;
  border-radius: 10px;

  cursor: pointer;
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
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
`;

export const IssueCardFooter = styled.footer``;
