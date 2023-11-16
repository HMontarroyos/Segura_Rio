import React from "react";
import * as S from "./styled";
import "./style.css";
import { toast } from "react-toastify";
import { benefits } from "../../global/const";
import { Button } from "../../components";

const Home = () => {
  const handleSubmit = () => {
    toast.success("Breve um consultor irá retornar o contato", {
      className: "custom-toast",
    });
  };

  return (
    <S.Container id={"form"}>
      <S.ContainerBenefits>
        <S.Title>Aproveite já nossos benefícios </S.Title>
        {benefits?.map((benefit, key) => (
          <S.ContainerTextBenefits key={key}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                justifyContent: "center",
              }}
            >
              <S.ContainerIcon>{benefit.icon}</S.ContainerIcon>
              <S.Name>{benefit.name}</S.Name>
            </div>
            <S.Description>{benefit.description}</S.Description>
          </S.ContainerTextBenefits>
        ))}
      </S.ContainerBenefits>
      <S.ContainerForm>
        <S.Title>Solicite aqui sua cotação !</S.Title>
        <S.Description>Deixe seu contato para falarmos com você.</S.Description>
        <S.Form>
          <S.Input
            type="text"
            id="nome"
            name="nome"
            placeholder="Nome"
            required
          />
          <S.Input
            type="text"
            id="cpf"
            name="cpf"
            placeholder="Cpf do Segurado"
            /*  pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" */
            required
          />
          <S.Input
            type="email"
            id="email"
            name="email"
            placeholder="E-mail"
            required
          />
          <S.Input
            type="tel"
            id="telefone"
            name="telefone"
            /* pattern="\d{3}-\d{4}-\d{4}" */
            placeholder="Telefone"
            required
          />
        </S.Form>
        <Button text={"Enviar"} onClick={handleSubmit} />
      </S.ContainerForm>
    </S.Container>
  );
};

export default Home;
