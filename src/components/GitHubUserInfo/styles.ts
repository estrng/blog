import styled from "styled-components";

export const Avatar = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 50%;

  padding-bottom: -6px;
`;

export const Left = styled.div``;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;

  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
`;

export const Rightheader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Name = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 130%;
`;

export const Description = styled.h4`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;

  width: 100%;
`;
