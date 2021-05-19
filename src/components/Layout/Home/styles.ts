import styled from "styled-components";

import { SearchAlt } from "@styled-icons/boxicons-regular";

export const Container = styled.div``;

export const SearchSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: var(--text-color-secondary);
  margin-bottom: 40px;
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;

  > span {
    display: flex;
    flex-grow: 1;
    font-size: 16px;
    align-items: center;
  }

  @media (max-width: 720px) {
    flex-direction: column;
  }
`;

export const Searcher = styled.div`
  display: flex;
  flex-grow: 2;
  align-items: center;

  padding-left: 10px;
  border-radius: 8px;

  background-color: var(--background-color-dark);
`;

export const SearchIcon = styled(SearchAlt)`
  width: 24px;
  height: 24px;
  display: flex;
  flex-shrink: 0;
`;

export const Input = styled.input`
  display: flex;
  flex-grow: 1;

  padding: 16px;

  border: none;
  outline: none;
  background-color: transparent;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
`;

export const Table = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TableType = styled.div`
  display: flex;
  justify-content: space-around;

  padding: 20px;

  @media (max-width: 720px) {
    > *:nth-child(4),
    > *:nth-child(3) {
      display: none;
    }
  }
`;

export const TableTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: var(--text-color-secondary);

  display: flex;
  align-items: center;
`;

export const SortIcon = styled.div`
  color: var(--primary-color);
  margin-left: 2px;
  display: none;

  > svg {
    height: 20px;
    width: 20px;
  }
`;
