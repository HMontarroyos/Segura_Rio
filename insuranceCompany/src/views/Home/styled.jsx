import styled from "styled-components";

export const Container = styled.div`
  padding-top: 80px;
  display: flex;
  justify-content: space-between;
  padding: 20px 0 0 20px;
  background-color: #0069ff;

  @media (max-width: 715px) {
    flex-direction: column;
  }

`;

export const ContainerText = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  white-space: wrap;

  @media (max-width: 545px) {
    max-width: 300px;
  }
`;

export const Title = styled.h1`
  color: white;
  font-weight: bold;
  font-size: 80px;

  @media (max-width: 840px) {
    font-size: 40px;
  }
`;

export const Paragraph = styled.p`
  color: white;
  font-size: 18px;
  letter-spacing: 1px;
  gap: 20px;
  margin-top: 10px;
  margin-bottom: 10px;

  @media (max-width: 840px) {
    font-size: 14px;
  }
`;

export const Image = styled.img`
  max-width: 420px;
  bottom: 0;
  margin-top: auto;

  @media (max-width: 840px) {
    max-width: 320px;
  }

  @media (max-width: 545px) {
    max-width: 220px;
  }

  @media (max-width: 260px) {
    display: none;
  }

`;
