import { darken } from "polished";
import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const Container = styled.div`
  width: calc(100% - 900px);
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  position: relative;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 850px) {
    width: calc(100% - 100px);
  }
`;

export const Title = styled.h1`
  padding: 20px;
  color: #467aaf;
  font-size: 25px;
`;

export const Paragraph = styled.p`
  font-size: 20px;
  color: #467aaf;
  margin-bottom: 30px;
`;

export const ContainerIcon = styled.div`
  font-size: 190px;
  color: #467aaf;
  margin-bottom: 40px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 45px;
  color: #467aaf;

  &:hover {
    color: ${() => darken(0.1, "#467AAF")};
  }

  @media (max-width: 850px) {
    font-size: 35px;
  }
`;
