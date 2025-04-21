import { FaStar } from "react-icons/fa";
import { BestBusinessData } from "./BestBusiness.types";
import { RiSendPlaneFill } from "react-icons/ri";
import { AiFillSafetyCertificate } from "react-icons/ai";

export const dataFeaturesBusiness: BestBusinessData = [
  {
    id: 1,
    icon: <FaStar />,
    title: "Recompensas Exclusivas",
    description:
      "Disfruta de promociones especiales, descuentos y beneficios únicos por ser parte de nuestra comunidad de usuarios de la app.",
  },
  {
    id: 2,
    icon: <RiSendPlaneFill />,
    title: "Entrega Rápida",
    description:
      "Recibe tus platos recién hechos en la puerta de tu casa o donde prefieras, listos para disfrutar. ¡La comodidad que mereces!",
  },
  {
    id: 3,
    icon: <AiFillSafetyCertificate />,
    title: "Pedido 100% seguro y fácil",
    description:
      "Tu información y tus pedidos están protegidos. Navega por nuestro menú intuitivo y realiza tu orden en pocos pasos.",
  },
];