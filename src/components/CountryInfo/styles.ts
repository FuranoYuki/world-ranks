import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-start;

  width: 100%;
  padding: 20px;
  border-radius: 8px;

  background-color: var(--background-color-light);

  > h1 {
    font-size: 32px;
    font-weight: 500;
    text-align: center;
    margin-top: 1rem;
    word-wrap: break-word;
  }

  > span {
    font-size: 14px;
    font-weight: 400;
    margin-top: 4px;
    margin-bottom: 24px;
    text-align: center;
  }

  @media (min-width: 720px) {
    width: 30%;
  }
`;

export const ImageBox = styled.div`
  position: relative;
  width: 100%;

  > div {
    border-radius: 4px;
  }

  display: flex;
  justify-content: center;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > h2 {
    color: var(--text-color-secondary);
    font-weight: 500;
    font-size: 14px;
  }
`;
