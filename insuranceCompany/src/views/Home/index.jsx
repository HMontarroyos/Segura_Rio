import React from "react";
import * as S from "./styled";
import Fade from "react-reveal/Fade";
import { Header } from "../../components";
import { descriptionSeguraRio } from "../../global/const";
import happy_woman from "../../assets/images/happy_woman.png";

const Home = () => {
  return (
    <>
      <Header />
      <S.Container>
        <S.ContainerText>
          <S.Title>Segura Rio</S.Title>
          {descriptionSeguraRio?.map((description, key) => (
            <S.Paragraph key={key}>{description}</S.Paragraph>
          ))}
        </S.ContainerText>
        <Fade right>
          <S.Image src={happy_woman} alt={"Uma foto de uma mulher sorrindo"} />
        </Fade>
      </S.Container>
    </>
  );
};

export default Home;
