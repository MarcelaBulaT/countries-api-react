import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const CountryStyled = styled.div`
  text-align: left;
  border-radius: 5px;
  margin: 1em;
  overflow: hidden;
  box-shadow: 0 0 7px 2px rgba(0, 0, 0, 0.3);
  img {
    width: 100%;
    height: 160px;
    object-fit: cover;
  }
  .informacion {
    padding: 1.5em;
  }
  .h2 {
    margin: 0;
    margin-bottom: 1rem;
    font-size: 20px;
    font-weight: 700;
  }
  .p {
    font-size: 0.9em;
    marigin-bottom: 0.5rem;
  }
`;

function Country({ flag, name, population, region, capital }) {
  const navegar = useHistory();
  function DetallesClick() {
    navegar.push("/country/${name}");
  }
  return (
    <CountryStyled onClick={DetallesClick}>
      <img loading="lazy" src={flag} alt="" />
      <div className="informacion">
        <h2>{name}</h2>
        <p>
          <strong>Population:</strong>
          {population}
        </p>
        <p>
          <strong>Region:</strong>
          {region}
        </p>
        <p>
          <strong>Capital:</strong>
          {capital}
        </p>
      </div>
    </CountryStyled>
  );
}

export default Country;
