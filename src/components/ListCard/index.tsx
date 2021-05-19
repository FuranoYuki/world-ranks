/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Link from "next/link";

import { Container, Name, Row } from "./styles";

interface Props {
  flag: string;
  name: string;
  population: number;
  area: number;
  gini: number;
  cioc: string;
}

const ListCard: React.FC<Props> = ({
  flag,
  name,
  population,
  area,
  gini,
  cioc,
}) => {
  return (
    <Container>
      <Link href={`/Country/${cioc}`}>
        <a>
          <Name>
            <img src={flag} alt={name} />
            <Row>{name}</Row>
          </Name>
          <Row>{population !== null ? population : 0}</Row>
          <Row>{area !== null ? area : 0}</Row>
          <Row>{gini === null ? 0 : gini}%</Row>
        </a>
      </Link>
    </Container>
  );
};

export default ListCard;
