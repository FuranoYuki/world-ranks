import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 20px;

  margin-bottom: 16px;

  border-radius: 8px;
  background-color: var(--background-color-light);

  transition: transform, box-shadow 0.2s ease-in-out;

  > a {
    display: flex;
    justify-content: space-between;
    font-weight: 500;
  }

  &:hover {
    box-shadow: var(--box-shadow);
    transform: translateY(-4px);
    cursor: pointer;
  }

  @media (max-width: 720px) {
    > a > * :nth-last-child(1),
    > a > * :nth-last-child(2) {
      display: none;
    }

    > a > div {
      width: 50%;
    }
  }
`;

export const Name = styled.div`
  display: flex;
  flex-grow: 1;
  min-width: 25%;

  > img {
    height: 36px;
    width: 55px;
  }

  > div {
    margin-left: 10px;
    justify-content: flex-start;
    text-align: left;
  }

  @media (max-width: 720px) {
    > img {
      display: none;
    }
  }
`;

export const Row = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  min-width: 25%;

  font-size: 16px;
  color: inherit;
  text-align: center;
`;
