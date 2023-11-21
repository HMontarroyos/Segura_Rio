import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  z-index: 9999;
  top: 0;
`;

export const Header = styled.header`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0.5rem 1rem;
`;

export const Navigation = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 62px;
  height: 65px;
`;

export const Title = styled.h3`
  color: #467aa7;
  font-size: 20px;
`;
