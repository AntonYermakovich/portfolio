import { Element } from "react-scroll";
import langBao from "../../assets/img/langbao.png";
import simpleMotors from "../../assets/img/simplemotors.jpg";
import techvortex from "../../assets/img/techvortext.png";
import { motion } from "framer-motion";
import Project from "../Project/Project";
import { TProject } from "../../types";

const projects:TProject[] = [
  {
    id: 1,
    title: "Lang bao",
    description: "Лангбао - инновационный завод по производству бытовой химии на территории материкового Китая.",
    img: langBao,
    link: "https://lang-bao.com"
  },
  {
    id: 2,
    title: "Simple Motors",
    description: "Мы предлагаем высококачественные детали Европейского и Японского производства.",
    img: simpleMotors,
    link: "https://simple-motors.ru"
  },
  {
    id: 3,
    title: "TechVortex",
    description: "Мы специализируемся на разработке программного обеспечения любой сложности.",
    img: techvortex,
    link: "https://technovertex.ru/"
  }
]

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
        {projects.map(project => <Project key={project.id} {...project} />)}
      </div>
    </Element>
  );
};

export default Portfolio;
