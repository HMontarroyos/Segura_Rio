import * as S from "./styled";
import { MdSubdirectoryArrowRight } from "react-icons/md";

function CardCoverage({ name, icon, description }) {
  console.log("ICON", icon);
  return (
    <S.Container onClick={()=> console.log("ENTROu")}>
      <S.Title>{name}</S.Title>
      <S.ContainerIcon>{icon}</S.ContainerIcon>
      <S.Button>
        <p>Saiba mais</p>
        <MdSubdirectoryArrowRight />
      </S.Button>
    </S.Container>
  );
}

export default CardCoverage;
