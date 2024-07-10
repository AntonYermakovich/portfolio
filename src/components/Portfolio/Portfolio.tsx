import { Element } from "react-scroll";
import langBao from "../../assets/img/langbao.png";
import simpleMotors from "../../assets/img/simplemotors.jpg";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";

const MUp = {
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3 },
  }),
  hidden: { opacity: 0, y: 100 },
};

const Portfolio = () => {
  return (
    <Element name="portfolio" className="section portfolio">
      <motion.h2
        variants={MUp}
        viewport={{ once: true, amount: 0.8 }}
        initial="hidden"
        whileInView="visible"
        custom={0.3}
        className="section__title"
      >
        Portfolio
      </motion.h2>
      <motion.span
        variants={MUp}
        viewport={{ once: true, amount: 0.8 }}
        initial="hidden"
        whileInView="visible"
        custom={0.6}
        className="section__subtitle"
      >
        Most recent work
      </motion.span>

      <div className="container">
        <motion.div
          variants={MUp}
          viewport={{ once: true }}
          initial="hidden"
          whileInView="visible"
          custom={0.3}
          className="portfolio__content grid"
        >
          <div className="portfolio__img">
            <img src={langBao} alt="Image" />
          </div>

          <div className="portfolio__data">
            <h3 className="portfolio__title">Lang bao</h3>
            <span className="portfolio__description">
              Лангбао - инновационный завод по производству бытовой химии на
              территории материкового Китая.
            </span>
            <div>
              <a
                href="https://lang-bao.com/"
                target="_blank"
                className="button button--flex button--small portfolio__button"
              >
                Demo
                <FaArrowRight className="button__icon" />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={MUp}
          viewport={{ once: true }}
          initial="hidden"
          whileInView="visible"
          custom={0.6}
          className="portfolio__content grid slider-slide"
        >
          <img src={simpleMotors} alt="Image" className="portfolio__img" />

          <div className="portfolio__data">
            <h3 className="portfolio__title">Simple Motors</h3>
            <span className="portfolio__description">
              Мы предлагаем высококачественные детали Европейского и Японского
              производства на выгодных условиях сотрудничества.
            </span>
            <div>
              <a
                href="https://simple-motors.ru"
                target="_blank"
                className="button button--flex button--small portfolio__button"
              >
                Demo
                <FaArrowRight className="button__icon" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="portfolio__slider">
        <div className="portfolio__container container slider-container">
          <div className="slider-wrapper"></div>
        </div>
      </div>
    </Element>
  );
};

export default Portfolio;
