import { Element } from "react-scroll";
import Porfolio1 from "../../assets/img/portfolio1.jpg";
import Porfolio2 from "../../assets/img/portfolio2.jpg";
import Porfolio3 from "../../assets/img/portfolio3.jpg";
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

      <div className="portfolio__slider">
        <div className="portfolio__container container slider-container">
          <div className="slider-wrapper">
            <motion.div
              variants={MUp}
              viewport={{ once: true }}
              initial="hidden"
              whileInView="visible"
              custom={0.3}
              className="portfolio__content grid slider-slide"
            >
              <img src={Porfolio1} alt="Image" className="portfolio__img" />

              <div className="portfolio__data">
                <h3 className="portfolio__title">Modern Website</h3>
                <span className="portfolio__description">
                  Website adaptable to all devices, with ui components and
                  animated interactions.
                </span>
                <div>
                  <a
                    href="#"
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
              <img src={Porfolio2} alt="Image" className="portfolio__img" />

              <div className="portfolio__data">
                <h3 className="portfolio__title">Brand Desing</h3>
                <span className="portfolio__description">
                  Website adaptable to all devices, with ui components and
                  animated interactions.
                </span>
                <div>
                  <a
                    href="#"
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
              custom={0.9}
              className="portfolio__content grid slider-slide"
            >
              <img src={Porfolio3} alt="Image" className="portfolio__img" />

              <div className="portfolio__data">
                <h3 className="portfolio__title">Online Store</h3>
                <span className="portfolio__description">
                  Website adaptable to all devices, with ui components and
                  animated interactions.
                </span>
                <div>
                  <a
                    href="#"
                    className="button button--flex button--small portfolio__button"
                  >
                    Demo
                    <FaArrowRight className="button__icon" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Portfolio;
