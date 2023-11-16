import React from "react";
import * as S from "./styled";
import { CardCoverage } from "../../components";
import { coverages } from "../../global/const";

const Home = () => {
  return (
    <S.Container>
      <S.Title>
        Conheça as nossas coberturas e descubra a segurança que vai além das
        expectativas.
      </S.Title>
      <S.ContainerCard>
      {coverages?.map((coverage, key) => (
        <CardCoverage name={coverage.name} icon={coverage.icon} key={key} />
      ))}
      </S.ContainerCard>
    </S.Container>
  );
};

export default Home;
