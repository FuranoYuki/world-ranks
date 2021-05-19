import React from "react";
import Image from "next/image";

import { Container, ImageBox, Info, InfoBox } from "./styles";

interface Props {
  imgSrc: string;
  name: string;
  region: string;
  population: string;
  area: string;
}

const CountryInfo: React.FC<Props> = ({
  imgSrc,
  name,
  region,
  population,
  area,
}) => {
  return (
    <Container>
      <ImageBox>
        <Image
          width={720}
          height={504}
          src={imgSrc}
          alt={name}
          objectFit="cover"
          objectPosition="center"
        />
      </ImageBox>
      <h1>{name}</h1>
      <span>{region}</span>
      <Info>
        <InfoBox>
          <span>{population}</span>
          <h2>Population</h2>
        </InfoBox>
        <InfoBox>
          <span>{area}</span>
          <h2>Area</h2>
        </InfoBox>
      </Info>
    </Container>
  );
};

export default CountryInfo;
