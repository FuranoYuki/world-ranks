import React from "react";
import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";

import Header from "../../components/Header";
import CountryInfo from "../../components/CountryInfo";
import CountryDetails from "../../components/CountryDetails";
import Footer from "../../components/Footer";

import { Container } from "../../styles/Country";

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://restcountries.eu/rest/v2/all");
  const countries = await res.json();

  const paths = countries.map((country) => ({
    params: { id: country.alpha3Code },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(
    `https://restcountries.eu/rest/v2/alpha/${params.id}`
  );
  const country = await res.json();

  const borders = [];
  await Promise.all(
    country.borders.map(async (data) => {
      const borderingCountry = await fetch(
        `https://restcountries.eu/rest/v2/alpha/${data}`
      );

      const result = await borderingCountry.json();
      borders.push(result);
    })
  );

  return {
    props: {
      country,
      borders,
    },
  };
};

interface Props {
  country;
  borders;
}

const Country: React.FC<Props> = ({ country, borders }) => {
  return (
    <div>
      <Head>
        <title>{country.name}</title>
        <link rel="icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Container>
        <Header />
        <CountryInfo
          imgSrc={country.flag}
          name={country.name}
          region={country.region}
          population={country.population}
          area={country.area}
        />
        <CountryDetails
          capital={country.name}
          languages={country.languages[0].name}
          currencies={country.currencies[0].name}
          nativeName={country.nativeName}
          gini={country.gini}
          borders={borders}
        />
        <Footer />
      </Container>
    </div>
  );
};

export default Country;
