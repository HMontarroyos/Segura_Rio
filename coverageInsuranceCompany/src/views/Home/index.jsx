import React, { useState } from "react";
import * as S from "./styled";
import { CardCoverage, Modal } from "../../components";
import { coverages } from "../../global/const";

const Home = () => {
  const [modalInfo, setModalInfo] = useState(null);

  const handleCardClick = (info) => {
    setModalInfo(info);
  };

  const closeModal = () => {
    setModalInfo(null);
  };

  const closeModalAndScroll = () => {
    closeModal();
    const bottomPage = document.getElementById("form");
    if (bottomPage) {
      window.scrollTo({
        top: bottomPage.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <S.Container>
      <S.Title>
        Conheça as nossas coberturas e descubra a segurança que vai além das
        expectativas.
      </S.Title>
      <S.ContainerCard>
        {coverages?.map((coverage, key) => (
          <CardCoverage
            name={coverage.name}
            icon={coverage.icon}
            description={coverage.description}
            key={key}
            onClick={handleCardClick}
          />
        ))}
      </S.ContainerCard>
      <Modal
        isOpen={!!modalInfo}
        onClose={closeModal}
        title={modalInfo?.title}
        description={modalInfo?.description}
        icon={modalInfo?.icon}
        onButtonClick={closeModalAndScroll}
      />
    </S.Container>
  );
};

export default Home;
