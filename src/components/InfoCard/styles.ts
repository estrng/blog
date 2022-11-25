import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  max-height: 100%;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-top: -100px;

  background: #0b1b2b;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  padding: 32px 40px;
  gap: 20px;
`;

export const Avatar = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 50%;

  background: url("https://picsum.photos/50");
  padding-bottom: -6px;
`;

export const Left = styled.div``;

export const Right = styled.div`
  background: blue;
`;
