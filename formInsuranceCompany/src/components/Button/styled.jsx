import { darken } from "polished";
import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 10px;
  border-radius: 5px;
  background-color: ${() => darken(0.1, "#0069FF")};
  height: 40px;
  width: 150px;
  cursor: pointer;
  color: white;
  font-weight: bold;

  &:hover {
    background-color: ${() => darken(0.2, "#0069FF")};
  }

  &:disabled {
    background-color: #d3d3d3;
    color: ${() => darken(0.5, "#D3D3D3")};
    cursor: not-allowed;
  }
`;

export const ContainerText = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 25px;
`;

export const Text = styled.p`
  margin-left: 10px;
  font-size: 18px;
  font-weight: bold;

`;
