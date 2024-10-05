import { TProject } from "../../types";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";

const MUp = {
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3 },
  }),
  hidden: { opacity: 0, y: 100 },
};

const Project = ({
  title,
  description,
  link,
  img,
}: TProject) => {
  return (
    <motion.div
      variants={MUp}
      viewport={{ once: true }}
      initial="hidden"
      whileInView="visible"
      custom={0.3}
      className="portfolio__content grid"
    >
      <div className="portfolio__img">
        <img src={img} alt="Image" />
      </div>

      <div className="portfolio__data">
        <h3 className="portfolio__title">{title}</h3>
        <span className="portfolio__description">{description}</span>
        <div>
          <a
            href={link}
            target="_blank"
            className="button button--flex button--small portfolio__button"
          >
            Demo
            <FaArrowRight className="button__icon" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
