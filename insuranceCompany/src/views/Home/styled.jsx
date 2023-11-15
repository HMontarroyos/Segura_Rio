import styled from "styled-components";

export const Container = styled.div`
  padding-top: 80px;
  display: flex;
  justify-content: space-between;
  align-items: left;
  padding: 20px 0 0 20px;
  background-color: #0069ff;
`;

export const ContainerText = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: white;
  font-weight: bold;
  font-size: 80px;
`;

export const Paragraph = styled.p`
  color: white;
  font-size: 18px;
  letter-spacing: 1px;
  gap: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Image = styled.img`
  max-width: 420px;
  bottom: 0;
  margin-top: auto;
`;
