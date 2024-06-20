import { Element } from "react-scroll";
import AboutPng from "../../assets/img/about.png";
import { FaDownload } from "react-icons/fa6";
import { motion } from "framer-motion";

const MLeft = {
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.3 },
  }),
  hidden: { opacity: 0, x: -50 },
};

const MRight = {
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.3 },
  }),
  hidden: { opacity: 0, x: 70 },
};

const MUp = {
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3 },
  }),
  hidden: { opacity: 0, y: 100 },
};

const About = () => {
  return (
    <Element name="about" className="section about">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        variants={MUp}
        viewport={{ once: true }}
        className="section__title"
      >
        About me
      </motion.h2>
      <motion.span
        variants={MUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        custom={0.5}
        className="section__subtitle"
      >
        My introduction
      </motion.span>

      <div className="about__container container grid">
        <motion.img
          variants={MLeft}
          initial="hidden"
          whileInView="visible"
          custom={0.5}
          viewport={{ once: true, amount: 0.5 }}
          src={AboutPng}
          alt="Image"
          className="about__img"
        />

        <div className="about__data">
          <motion.p
            variants={MUp}
            initial="hidden"
            whileInView="visible"
            custom={0}
            viewport={{ once: true, amount: 0.8 }}
            className="about__description"
          >
            I'm an enthusiastic and detail-oriented Front end Software seeking
            an entry-level position with Company to use my skills in coding,
            troubleshooting complex problems, and assisting in the timely
            completion of projects.
          </motion.p>

          <div className="about__info">
            <motion.div custom={2} variants={MUp} initial="hidden" whileInView='visible' viewport={{once: true, amount: .8}}>
              <span className="about__info-title">1</span>
              <span className="about__info-name">
                Year <br /> experience
              </span>
            </motion.div>

            <motion.div custom={2.3} variants={MUp} initial="hidden" whileInView='visible' viewport={{once: true, amount: .8}}>
              <span className="about__info-title">6</span>
              <span className="about__info-name">
                Completed <br /> project
              </span>
            </motion.div>

            <motion.div custom={2.6} variants={MUp} initial="hidden" whileInView='visible' viewport={{once: true, amount: .8}}>
              <span className="about__info-title">0</span>
              <span className="about__info-name">
                Companies <br /> worked
              </span>
            </motion.div>
          </div>

          <div className="about__buttons">
            <motion.a
              custom={1}
              variants={MUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              download
              href="../../assets/pdf/CV_Anton_Yermakovich_Junior_Front-end_Developer_en.pdf"
              className="button button--flex"
            >
              Download CV <FaDownload className="button__icon" />
            </motion.a>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default About;
