import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { TServices } from "../../../types";

const ServiceList = ({ services }: TServices) => {
  return (
    <ul className="services__modal-services grid">
      {services.map((service, index) => (
        <li key={index} className="services__modal-service">
          <IoMdCheckmarkCircleOutline className="services__modal-icon" />
          <p>{service.title}</p>
        </li>
      ))}
    </ul>
  );
};

export default ServiceList;
