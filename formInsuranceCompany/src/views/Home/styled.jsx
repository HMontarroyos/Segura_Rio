import styled from "styled-components";
import { darken, lighten } from "polished";

export const Title = styled.h1`
  font-size: 25px;
  color: #467aa7;
  font-weight: 700;
  letter-spacing: 1px;
  margin-bottom: 20px;
`;

export const Container = styled.div`
  background-color: ${() => lighten(0.4, "#0069FF")};
  display: flex;
  justify-content: space-around;
  text-align: center;
  padding: 20px;
  padding-top: 40px;
  padding-bottom: 80px;

  @media (max-width: 828px) {
    flex-direction: column;
  }

`;

export const ContainerBenefits = styled.div`
display: flex;
align-items: center;
text-align: center;
justify-content: center;
flex-direction: column;

`;

export const ContainerTextBenefits = styled.div`
  width: 400px;
  margin-bottom: 30px;

  @media (max-width: 498px) {
    width: 200px;
  }
`;

export const ContainerIcon = styled.div`
  color: ${() => darken(0.2, "#0069FF")};
  font-size: 35px;
  font-weight: bold;
  margin-left: 10px;
  margin-right: 10px;
`;

export const Name = styled.h2`
  color: ${() => darken(0.2, "#0069FF")};
  font-size: 18px;
  font-weight: bold;
`;

export const Description = styled.p`
  color: ${() => darken(0.2, "#0069FF")};
  font-size: 14px;
`;

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  flex-direction: column;
  margin-top: 20px;
`;

export const Input = styled.input`
  font-size: 18px;
  line-height: 1.3;
  height: 35px;
  border: 2px solid #003F99;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 20px;
  width: 100%;
  transition: border-color 0.3s ease, border-width 0.3s ease;

  &:focus-within:not(:disabled) {
    border-color: ${darken(0.1, "#96cbd5")};
  }
  &:hover:not(:disabled) {
    border-color: ${darken(0.2, "#96cbd5")};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7; 
  }
`;
