import * as S from "./styled";

function Button({ disabled, onClick, text }) {
  return (
    <S.Container disabled={disabled} onClick={onClick}>
      <S.ContainerText>
        <S.Text>{text}</S.Text>
      </S.ContainerText>
    </S.Container>
  );
}

export default Button;
