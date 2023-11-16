import * as S from "./styled";
import { FaWindowClose } from "react-icons/fa";
import { Button } from "../../components";

function Modal({ isOpen, onClose, title, description, icon, onButtonClick }) {
  if (!isOpen) return null;

  return (
    <S.ModalOverlay>
      <S.Container>
        <S.CloseButton onClick={onClose}>
          <FaWindowClose />
        </S.CloseButton>
        <S.Title>{title}</S.Title>
        <S.Paragraph>{description}</S.Paragraph>
        <S.ContainerIcon>{icon}</S.ContainerIcon>
        <Button onClick={onButtonClick} text={"Contatar Seguradora"}/>
      </S.Container>
    </S.ModalOverlay>
  );
}

export default Modal;
