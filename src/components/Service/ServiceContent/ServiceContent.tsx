import { IoMdClose } from "react-icons/io";
import ServiceList from "../ServiceList/ServiceList";
import { TServeiceContent } from "../../../types";
import { motion } from "framer-motion";

const frontendService = [
  { title: "Application layout using HTML/CSS/JS." },
  { title: "Developing the logic of a component or application." },
  { title: "Thinking through the application architecture." },
  { title: "Search and evaluation of solutions." },
  { title: "Refactoring and optimization of current functionality." },
  { title: "Configuring and optimizing the project build." },
];
const backendService = [
  {
    title:
      "Ensuring the correct operation of all website functions and its computational logic.",
  },
  { title: "Organization and work with databases via DBMS." },
  {
    title: " Development of the basic logic and algorithms of the application.",
  },
  { title: "API." },
  { title: "Recessary integrations with external services." },
  {
    title:
      "Testing and debugging of the application and individual components.",
  },
];
const uiService = [
  {
    title: "Designing custom pages and screens.",
  },
  { title: "Matching graphic elements with corporate identity." },
  {
    title: "Drawing buttons, blocks, sliders, switches.",
  },
  { title: "Formation of guidelines for the creation of a software product." },
];

const MUp = {
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3 },
  }),
  hidden: { opacity: 0, y: 100 },
};

const ServiceContent = ({
  children,
  openModal,
  setOpenModal,
  modal,
}: TServeiceContent) => {
  return (
    <motion.div
      variants={MUp}
      initial="hidden"
      whileInView='visible'
      viewport={{once: true, amount: .8}}
      custom={modal === 0 ? 0.3 : modal === 1 ? 0.6 : 0.9}
      className="services__content"
    >
      {children}

      <div className={`services__modal ${openModal ? "active-modal" : ""}`}>
        <div className="services__modal-content">
          <h4 className="services__modal-title">
            {modal === 0 && "Frontend Developer"}
            {modal === 1 && "Backend Developer"}
            {modal === 2 && "UI/UX Desinger"}
          </h4>
          <IoMdClose
            className="services__modal-close"
            onClick={() => setOpenModal(!openModal)}
          />

          {modal === 0 && <ServiceList services={frontendService} />}
          {modal === 1 && <ServiceList services={backendService} />}
          {modal === 2 && <ServiceList services={uiService} />}
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceContent;
