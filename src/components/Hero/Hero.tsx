import { Link, Element } from "react-scroll";
import {
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaAngleDown,
} from "react-icons/fa6";
import { HiOutlinePaperAirplane } from "react-icons/hi2";
import Perfil from "../../assets/img/perfil.png";
import { motion } from "framer-motion";

const MLeft = {
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.3 },
  }),
  hidden: { opacity: 0, x: -50 },
};

const MUp = {
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3 },
  }),
  hidden: { opacity: 0, y: 100 },
};

const Hero = () => {
  return (
    <Element name="home" className="home section">
      <div className="home__container container grid">
        <div className="home__content grid">
          <motion.div
            variants={MLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
            className="home__social"
          >
            <motion.a
              custom={1}
              variants={MLeft}
              href="https://www.linkedin.com/in/anton-yermakovich-372715192/"
              target="_blank"
              className="home__social-icon"
            >
              <FaLinkedinIn />
            </motion.a>

            <motion.a
              custom={1.5}
              variants={MLeft}
              href="https://www.instagram.com/antonyermakovich/"
              target="_blank"
              className="home__social-icon"
            >
              <FaInstagram />
            </motion.a>

            <motion.a
              custom={2}
              variants={MLeft}
              href="https://github.com/AntonYermakovich"
              target="_blank"
              className="home__social-icon"
            >
              <FaGithub />
            </motion.a>
          </motion.div>

          <motion.div
            custom={2.5}
            initial="hidden"
            whileInView="visible"
            variants={MUp}
            viewport={{once: true}}
            className="home__img"
          >
            <svg
              className="home__blob"
              viewBox="0 0 200 187"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <mask id="mask0" mask-type="alpha">
                <path
                  d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
								130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
								97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
								0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                />
              </mask>
              <g mask="url(#mask0)">
                <path
                  d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
								165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
								129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
								-0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                />
                <image className="home__blob-img" x="12" y="18" href={Perfil} />
              </g>
            </svg>
          </motion.div>

          <motion.div
            variants={MUp}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
            className="home__data"
          >
            <motion.h1 custom={1} variants={MUp} className="home__title">
              Hi, I am Anton
            </motion.h1>
            <motion.h3 custom={1.3} variants={MUp} className="home__subtitle">
              Junior frontend developer
            </motion.h3>
            <motion.p custom={1.6} variants={MUp} className="home__description">
              Good knowledge in the field of frontend and backend
            </motion.p>
            <motion.div custom={1.9} variants={MUp}>
              <Link
                to="contact"
                duration={500}
                spy={true}
                smooth={true}
                className="button button--flex"
              >
                Contact me <HiOutlinePaperAirplane className="button__icon" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          custom={2.5}
          variants={MUp}
          initial="hidden"
          animate="visible"
          className="home__scroll"
        >
          <Link
            to="about"
            smooth={true}
            spy={true}
            duration={500}
            className="home__scroll-button button--flex"
          >
            <div className="home__scroll-mouse" />
            <span className="home__scroll-name">Scroll down</span>
            <FaAngleDown className="home__scroll-arrow" />
          </Link>
        </motion.div>
      </div>
    </Element>
  );
};

export default Hero;
