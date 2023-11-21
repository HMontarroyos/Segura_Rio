import React, { useState, useEffect } from "react";
import * as S from "./styled";
import "./style.css";
import { toast } from "react-toastify";
import {
  isValidEmail,
  isValidCPF,
  isValidPhone,
  isValidCEP,
} from "../../utils";
import { getCep } from "../../server/api";
import { benefits } from "../../global/const";
import { Button } from "../../components";

const Home = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    cpf: "",
    email: "",
    phone: "",
    cep: "",
    address: "",
    city: "",
    state: "",
  });

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleCep = async (e) => {
    const { value } = e.target;

    handleChange(e);

    if (isValidCEP(value) && value.length === 8) {
      try {
        const cepData = await getCep(value);

        setFormValues((prevFormValues) => ({
          ...prevFormValues,
          address: cepData.logradouro,
          city: cepData.bairro,
          state: cepData.localidade,
        }));
      } catch (error) {
        console.error("Error fetching address", error);
        toast.error("Por favor, preencha com um cep válido", {
          className: "custom-toast-error",
        });
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  };

  useEffect(() => {
    // Verificar a validação sempre que o formValues for atualizado
    const allFieldsFilled = Object.values(formValues).every(
      (val) => val.trim() !== ""
    );
    setIsButtonDisabled(!allFieldsFilled);
  }, [formValues]);

  const handleSubmit = () => {
    if (
      isValidEmail(formValues.email) &&
      isValidCPF(formValues.cpf) &&
      isValidPhone(formValues.phone) &&
      isValidCEP(formValues.cep)
    ) {
      const savedUser = localStorage.getItem("user");

      if (savedUser) {
        sessionStorage.setItem("user", JSON.stringify(formValues));
      } else {
        sessionStorage.setItem("user", JSON.stringify(formValues));
      }

      toast.success("Breve um consultor irá retornar o contato", {
        className: "custom-toast",
      });

      setFormValues({
        name: "",
        cpf: "",
        email: "",
        phone: "",
        cep: "",
        address: "",
        city: "",
        state: "",
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
    <S.Container>
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
        <S.Form id={"form"}>
          <S.Input
            type="text"
            id="name"
            name="name"
            placeholder="Nome"
            value={formValues.name}
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
            type="telefone"
            id="phone"
            name="phone"
            placeholder="Telefone"
            value={formValues.phone}
            onChange={handleChange}
            required
          />
          <S.Input
            type="text"
            id="cep"
            name="cep"
            placeholder="Cep"
            value={formValues.cep}
            maxLength={8}
            onChange={handleCep}
            required
          />
          <S.Input
            type="text"
            id="address"
            name="address"
            placeholder="Endereço"
            value={formValues.address}
            onChange={handleChange}
            disabled
          />
          <S.Input
            type="text"
            id="city"
            name="city"
            placeholder="Cidade"
            value={formValues.city}
            onChange={handleChange}
            disabled
          />
          <S.Input
            type="text"
            id="state"
            name="state"
            placeholder="Estado"
            value={formValues.state}
            onChange={handleChange}
            disabled
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
