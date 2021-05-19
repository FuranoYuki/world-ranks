import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  gap: 24px;

  padding: 25px;

  > *:nth-child(1) {
    margin-bottom: 0;
  }

  @media (min-width: 720px) {
    flex-direction: row;
  }
`;
