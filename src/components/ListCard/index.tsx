import React from "react";
import Link from "next/link";

import { Container, Name, Row } from "./styles";

interface Props {
  flag: string;
  name: string;
  population: number;
  area: number;
  gini: number;
  alpha3Code: string;
}

const ListCard: React.FC<Props> = ({
  flag,
  name,
  population,
  area,
  gini,
  alpha3Code,
}) => {
  return (
    <Container>
      <Link href={`/Country/${alpha3Code}`}>
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
