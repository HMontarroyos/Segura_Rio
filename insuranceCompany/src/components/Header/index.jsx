import * as S from "./styled";
import  logo  from "../../assets/images/logo.png";


function Header() {
  return (
    <S.Container>
      <S.Header>
        <S.Navigation>
          <S.Image src={logo} alt={"Logo Segura Rio"} />
          <S.Title>Segura Rio</S.Title>
        </S.Navigation>
      </S.Header>
    </S.Container>
  );
}

export default Header;
