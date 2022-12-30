import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const TextHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 160%;
`;

export const Sub = styled.h6`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;
`;

export const SearchInput = styled.input`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 14px 18px;
  gap: 8px;

  background: #040f1a;

  border: 1px solid #1c2f41;
  border-radius: 6px;
`;
