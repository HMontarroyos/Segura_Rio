import { FaHouse, FaBuilding } from "react-icons/fa6";
import { MdOutlinePhoneIphone, MdAgriculture } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";


export const coverages = [
  {
    name: "Seguro Residência",
    icon: <FaHouse />,
    description: "Permite assegurar uma casa, apartamento",
  },
  {
    name: "Seguro Empresarial",
    icon: <FaBuilding/>,
    description: "Permite assegurar uma empresa de vários ramos diferentes, como por exemplo: Comércio, Indústria, Prestação de Serviços, entre outros.",
  },
  {
    name: "Seguro de Itens Pessoais",
    icon: <MdOutlinePhoneIphone />,
    description: "Assegura carteira, conta bancária, celular, etc, em caso de roubo ou furto.",
  },
  {
    name: "Seguro de Retenção",
    icon: <IoMdPerson />,
    description: "Igual ao Residencial e apenas o plano básico.",
  },
  {
    name: "Seguro Agricula Flex",
    icon: <MdAgriculture />,
    description: "Seguro para fazendas, podendo assegurar uma cultura (Ex: Plantação de soja) por UF/Município.",
  }
];
