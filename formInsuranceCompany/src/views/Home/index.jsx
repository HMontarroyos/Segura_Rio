import React, { useState } from "react";
import * as S from "./styled";
import "./style.css";
import { toast } from "react-toastify";
import { isValidEmail, isValidCPF, isValidPhone } from "../../utils";
import { benefits } from "../../global/const";
import { Button } from "../../components";

const Home = () => {
  const [formValues, setFormValues] = useState({
    nome: "",
    cpf: "",
    email: "",
    telefone: "",
  });

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });

    const allFieldsFilled = Object.values(formValues).every(
      (val) => val.trim() !== ""
    );
    setIsButtonDisabled(!allFieldsFilled);
  };

  const handleSubmit = () => {
    if (
      isValidEmail(formValues.email) &&
      isValidCPF(formValues.cpf) &&
      isValidPhone(formValues.telefone)
    ) {
      toast.success("Breve um consultor irá retornar o contato", {
        className: "custom-toast",
      });

      setFormValues({
        nome: "",
        cpf: "",
        email: "",
        telefone: "",
      });

      setIsButtonDisabled(true);
    } else {
      toast.error(
        "Por favor, preencha os campos corretamente, para que o consultor possa contatá-lo",
        {
          className: "custom-toast-error",
        }
      );
    }
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
            value={formValues.nome}
            onChange={handleChange}
            required
          />
          <S.Input
            type="text"
            id="cpf"
            name="cpf"
            placeholder="Cpf do Segurado"
            value={formValues.cpf}
            onChange={handleChange}
            required
          />
          <S.Input
            type="email"
            id="email"
            name="email"
            placeholder="E-mail"
            value={formValues.email}
            onChange={handleChange}
            required
          />
          <S.Input
            type="tel"
            id="telefone"
            name="telefone"
            placeholder="Telefone"
            value={formValues.telefone}
            onChange={handleChange}
            required
          />
        </S.Form>
        <Button
          text={"Enviar"}
          onClick={handleSubmit}
          disabled={isButtonDisabled}
        />
      </S.ContainerForm>
    </S.Container>
  );
};

export default Home;
