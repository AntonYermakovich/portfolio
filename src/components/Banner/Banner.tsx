import { HiOutlinePaperAirplane } from "react-icons/hi2";
import ImageAnton from "../../assets/img/project2.png";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const MUp = {
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3 },
  }),
  hidden: { opacity: 0, y: 100 },
};

const Banner = () => {
  return (
    <section className="project section">
      <div className="project__bg">
        <div className="project__container container grid">
          <div className="project__data">
            <motion.h2
              variants={MUp}
              initial="hidden"
              whileInView="visible"
              custom={0.3}
              viewport={{ once: true, amount: 0.8 }}
              className="project__title"
            >
              You have a new project
            </motion.h2>
            <motion.p
              variants={MUp}
              initial="hidden"
              whileInView="visible"
              custom={0.6}
              viewport={{ once: true, amount: 0.8 }}
              className="project__description"
            >
              Contact me now and get a 30% discount on your new project.
            </motion.p>
            <motion.div
							variants={MUp}
              initial="hidden"
              whileInView="visible"
              custom={0.9}
              viewport={{ once: true, amount: 0.8 }}
						>
              <Link
                to="contact"
                duration={500}
                spy={true}
                smooth={true}
                className="button button--flex button--white"
              >
                Contact Me
                <HiOutlinePaperAirplane className="project__icon button__icon" />
              </Link>
            </motion.div>
          </div>

          <motion.img
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            custom={0.5}
            viewport={{ once: true, amount: 0.8 }}
            src={ImageAnton}
            alt="Image"
            className="project__img"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
