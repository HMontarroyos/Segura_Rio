import React, { useState, useEffect } from "react";
import * as S from "./styled";
import Fade from "react-reveal/Fade";
import CookieConsent from "react-cookie-consent";
import { Header } from "../../components";
import { descriptionSeguraRio } from "../../global/const";
import happy_woman from "../../assets/images/happy_woman.png";

const Home = () => {
  const [showCookieConsent, setShowCookieConsent] = useState(false);

  const onAcceptCookies = () => {
    window.addEventListener("consentGranted", () => window.clarity("consent"));
    setShowCookieConsent(false);
  };

  const onDeclineCookies = () => {};

  useEffect(() => {
    const acceptedCookie = document.cookie
      .split(";")
      .some((cookie) => cookie.trim().startsWith("acceptedCookie="));

    if (!acceptedCookie) {
      setShowCookieConsent(true);
    }
  }, []);

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
      {showCookieConsent && (
        <CookieConsent
          style={{ background: "#CCE1FF" }}
          buttonStyle={{
            background: "#0054cc",
            color: "white",
            fontWeight: "bold",
            borderRadius: "5px",
            padding: "10px",
          }}
          buttonText="Aceitar"
          declineButtonText="Cancelar"
          declineButtonStyle={{
            background: "#BB0B0B",
            color: "white",
            fontWeight: "bold",
            borderRadius: "5px",
            padding: "10px",
          }}
          cookieName="acceptedCookie"
          debug
          overlay
          enableDeclineButton
          onAccept={onAcceptCookies}
          onDecline={onDeclineCookies}
        >
          <p
            style={{
              fontSize: "16px",
              color: "#003F99",
            }}
          >
            Usamos cookies para armazenar informações sobre como você usa o
            nosso site e as páginas que visita. Tudo para tornar sua experiência
            a mais agradável possível. Ao clicar em 'Aceitar', você consente com
            a utilização de cookies.
          </p>
        </CookieConsent>
      )}
    </>
  );
};

export default Home;
