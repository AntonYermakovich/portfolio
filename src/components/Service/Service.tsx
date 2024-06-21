import { Element } from "react-scroll";
import { FaCode, FaArrowRight } from "react-icons/fa6";
import { IoServerOutline } from "react-icons/io5";
import { CiGrid42 } from "react-icons/ci";
import ServiceContent from "./ServiceContent/ServiceContent";
import { useState } from "react";
import { motion } from "framer-motion";

const MUp = {
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3 },
  }),
  hidden: { opacity: 0, y: 100 },
};

const Service = () => {
  const [openModal1, setOpenModal1] = useState<boolean>(false);
  const [openModal2, setOpenModal2] = useState<boolean>(false);
  const [openModal3, setOpenModal3] = useState<boolean>(false);

  return (
    <Element name="service" className="section services">
      <motion.h2
        variants={MUp}
        whileInView="visible"
        initial="hidden"
        custom={0.3}
        viewport={{ once: true, amount: 0.8 }}
        className="section__title"
      >
        Service
      </motion.h2>
      <motion.span
        variants={MUp}
        whileInView="visible"
        initial="hidden"
        custom={0.6}
        viewport={{ once: true, amount: 0.8 }}
        className="section__subtitle"
      >
        What i offer
      </motion.span>

      <div className="services__container container grid">
        <ServiceContent
          modal={0}
          setOpenModal={setOpenModal1}
          openModal={openModal1}
        >
          <div>
            <FaCode className="services__icon" />
            <h3 className="services__title">Frontend Developer</h3>
          </div>
          <span
            onClick={() => setOpenModal1((prev) => !prev)}
            className="button button--flex button--small button--link services__button"
          >
            View More
            <FaArrowRight className="button__icon" />
          </span>
        </ServiceContent>

        <ServiceContent
          modal={1}
          setOpenModal={setOpenModal2}
          openModal={openModal2}
        >
          <div>
            <IoServerOutline className="services__icon" />
            <h3 className="services__title">Backend Developer</h3>
          </div>
          <span
            onClick={() => setOpenModal2((prev) => !prev)}
            className="button button--flex button--small button--link services__button"
          >
            View More
            <FaArrowRight className="button__icon" />
          </span>
        </ServiceContent>

        <ServiceContent
          modal={2}
          setOpenModal={setOpenModal3}
          openModal={openModal3}
        >
          <div>
            <CiGrid42 className="services__icon" />
            <h3 className="services__title">UI/UX Desinger</h3>
          </div>
          <span
            onClick={() => setOpenModal3((prev) => !prev)}
            className="button button--flex button--small button--link services__button"
          >
            View More
            <FaArrowRight className="button__icon" />
          </span>
        </ServiceContent>
      </div>
    </Element>
  );
};

export default Service;
