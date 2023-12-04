import { FaHouse, FaBuilding } from "react-icons/fa6";
import { MdOutlinePhoneIphone, MdAgriculture } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";

export const coverages = [
  {
    name: "Seguro Residência",
    icon: <FaHouse />,
    description:
      "O seguro residencial oferece proteção financeira para a sua casa, cobrindo danos causados por eventos como incêndios, roubos, desastres naturais e responsabilidade civil. Ele proporciona tranquilidade ao proprietário, garantindo a reparação ou substituição de bens e estruturas afetadas.",
  },
  {
    name: "Seguro Empresarial",
    icon: <FaBuilding />,
    description:
      "O seguro empresarial resguarda as empresas contra diversos riscos, incluindo danos ao patrimônio, interrupção das operações, responsabilidade civil e outros imprevistos. Oferece suporte financeiro para lidar com adversidades, permitindo que o negócio se recupere e prospere.",
  },
  {
    name: "Seguro de Itens Pessoais",
    icon: <MdOutlinePhoneIphone />,
    description:
      "Este seguro protege os pertences pessoais do segurado, como eletrônicos, joias, roupas e outros itens de valor. Oferece cobertura contra roubo, danos acidentais ou perda, proporcionando compensação financeira para a reposição dos itens assegurados.",
  },
  {
    name: "Seguro de Vida",
    icon: <IoMdPerson />,
    description:
      "O seguro de vida fornece proteção financeira aos beneficiários do segurado em caso de falecimento. Além disso, muitos planos oferecem benefícios adicionais, como cobertura por invalidez, doenças graves e despesas funerárias. Este tipo de seguro proporciona paz de espírito, garantindo apoio financeiro aos entes queridos em momentos difíceis.",
  },
  {
    name: "Seguro Agrícola Flex",
    icon: <MdAgriculture />,
    description:
      "O seguro agrícola visa proteger os produtores rurais contra perdas financeiras causadas por eventos adversos, como intempéries climáticas, pragas e doenças. Garante a estabilidade financeira do agricultor, auxiliando na recuperação dos prejuízos e assegurando a continuidade das atividades agrícolas.",
  },
];
