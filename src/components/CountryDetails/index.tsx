import React, { useEffect } from "react";
import Image from "next/image";

import {
  Container,
  Details,
  Header,
  Row,
  Neighbouring,
  NeighboorHeader,
  Countries,
  ImgBox,
  NeighboorName,
} from "./styles";

interface Props {
  capital: string;
  languages: string;
  currencies: string;
  nativeName: string;
  gini: string;
  borders;
}

const CountryDetails: React.FC<Props> = ({
  capital,
  languages,
  currencies,
  nativeName,
  gini,
  borders,
}) => {
  useEffect(() => {
    console.log(borders);
  }, [borders]);

  return (
    <Container>
      <Details>
        <Header>Details</Header>
        <Row>
          <h3>Capital</h3>
          <span>{capital}</span>
        </Row>
        <Row>
          <h3>Languages</h3>
          <span>{languages}</span>
        </Row>
        <Row>
          <h3>Currencies</h3>
          <span>{currencies}</span>
        </Row>
        <Row>
          <h3>Native name</h3>
          <span>{nativeName}</span>
        </Row>
        <Row>
          <h3>Gini</h3>
          <span>{gini}%</span>
        </Row>
      </Details>
      <Neighbouring>
        <NeighboorHeader>Neighbouring Countries</NeighboorHeader>
        <Countries>
          {borders.map((data) => (
            <ImgBox key={data.index}>
              <Image
                src={data.flag}
                alt={data.name}
                height={504}
                width={720}
                objectFit="cover"
              />
              <NeighboorName>{data.name}</NeighboorName>
            </ImgBox>
          ))}
        </Countries>
      </Neighbouring>
    </Container>
  );
};

export default CountryDetails;
