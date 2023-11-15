import styled from "styled-components";
import { darken } from 'polished'

export const Container = styled.div`
  align-items: center;
  background-color: #dfeff2;
  border-radius: 16px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  padding: 20px;
  text-align: center;
  width: 100%;
  max-width: 150px;
  height: 100%;
  min-height: 200px;
  margin: 0 auto;
  transition: background-color 0.5s ease-in-out;

  &:hover {
    background-color: ${darken(0.2, '#dfeff2')};
  }
`;

export const Title = styled.h2`
  font-size: 18px;
  letter-spacing: 1px;
  color: #467aa7;
`;

export const ContainerIcon = styled.div`
  margin-top: 20px;
  font-size: 60px;
  color: #467aa7;
  font-weight: bold;
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin-top: 10px;
  font-size: 15px;
  color: #467aa7;
`;
