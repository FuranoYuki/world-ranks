import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 25px 0;
  border-radius: 8px;

  background-color: var(--background-color-light);

  @media (min-width: 720px) {
    width: 60%;
  }
`;

export const Details = styled.div``;

export const Header = styled.div`
  padding: 0 20px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 10px 20px;
  border-bottom: 1px solid #e0e0e0;

  > * {
    font-weight: 400;
    font-size: 16px;
  }

  > h3 {
    color: var(--text-color-secondary);
  }
`;

export const Neighbouring = styled.div`
  width: 100%;
  padding: 20px;

  display: flex;
  flex-direction: column;
`;

export const NeighboorHeader = styled.div`
  margin-bottom: 20px;

  font-size: 16px;
  color: var(--text-color-secondary);
`;

export const Countries = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 24px;
`;

export const ImgBox = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;
  width: 100%;
`;

export const NeighboorName = styled.div`
  text-align: center;
  font-size: 16px;
  margin-top: 10px;
`;
