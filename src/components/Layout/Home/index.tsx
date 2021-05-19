import React, { useState, useEffect } from "react";

import ListCard from "../../ListCard";
import Header from "../../Header";
import Footer from "../../Footer";

import { ArrowIosDownward } from "@styled-icons/evaicons-solid";

import {
  Container,
  SearchSection,
  Bottom,
  Searcher,
  SearchIcon,
  Input,
  Table,
  TableType,
  TableTitle,
  SortIcon,
} from "./styles";

interface Props {
  countries;
}

const HomeLayout: React.FC<Props> = ({ countries }) => {
  const [allCountries, setAllContries] = useState(null);
  const [searchFilter, setSearchFilter] = useState("");

  const filterCountries = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setSearchFilter(target.value.toUpperCase());
  };

  const arrowControll = (e: React.MouseEvent) => {
    const target = e.currentTarget as HTMLDivElement;
    const children = target.lastElementChild as HTMLDivElement;
    let sort = "";

    const arrows = document.querySelectorAll(".sorticon");
    arrows.forEach((element: HTMLDivElement) => {
      console.log(element.className);
      if (children.className !== element.className) {
        element.style.display = "none";
        element.style.transform = "rotate(0deg)";
      }
    });

    if (children.style.transform == "rotate(180deg)") {
      children.style.display = "none";
      children.style.transform = "rotate(0deg)";
    } else if (
      children.style.display == "none" ||
      children.style.display == ""
    ) {
      sort = "asc";
      children.style.display = "flex";
    } else {
      sort = "desc";
      children.style.transform = "rotate(180deg)";
    }

    sortControll(target, sort);
  };

  const sortControll = (target: HTMLDivElement, sort: string) => {
    if (sort == "asc") {
      setAllContries(
        [...allCountries].sort((a, b) => (a[target.id] > b[target.id] ? 1 : -1))
      );
    } else if (sort == "desc") {
      setAllContries(
        [...allCountries].sort((a, b) => (a[target.id] > b[target.id] ? -1 : 1))
      );
    } else {
      setAllContries(
        [...allCountries].sort((a, b) => (a.name > b.name ? 1 : -1))
      );
    }
  };

  useEffect(() => {
    setAllContries(countries);
  }, [countries]);

  return (
    <Container>
      <Header />
      <SearchSection>
        <Bottom>
          <span>Found 250 countries</span>
          <Searcher>
            <SearchIcon />
            <Input
              onChange={filterCountries}
              placeholder="Filter by Name, Region or SubRegion"
            />
          </Searcher>
        </Bottom>
      </SearchSection>
      <Table>
        <TableType>
          <TableTitle id="name asc" onClick={arrowControll}>
            <span>Name</span>
            <SortIcon className="sorticon n-1">
              <ArrowIosDownward />
            </SortIcon>
          </TableTitle>
          <TableTitle id="population" onClick={arrowControll}>
            <span>Population</span>
            <SortIcon className="sorticon n-2">
              <ArrowIosDownward />
            </SortIcon>
          </TableTitle>
          <TableTitle id="area" onClick={arrowControll}>
            <span>Area(km²)</span>
            <SortIcon className="sorticon n-3">
              <ArrowIosDownward />
            </SortIcon>
          </TableTitle>
          <TableTitle id="gini" onClick={arrowControll}>
            <span>Gini</span>
            <SortIcon className="sorticon n-4">
              <ArrowIosDownward />
            </SortIcon>
          </TableTitle>
        </TableType>
        {allCountries &&
          allCountries
            .filter((data) =>
              data !== ""
                ? data.name.toUpperCase().includes(searchFilter.toUpperCase())
                : data
            )
            .map((country) => (
              <ListCard
                key={country.alpha3Code}
                flag={country.flag}
                name={country.name}
                population={country.population}
                area={country.area}
                gini={country.gini}
                alpha3Code={country.alpha3Code}
              />
            ))}
      </Table>
      <Footer />
    </Container>
  );
};

export default HomeLayout;
